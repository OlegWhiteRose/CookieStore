import { Request, Response } from 'express';
import { catchAsync } from '@middleware/async.middleware';
import { Order } from '@models/order.model';
import { AppError } from '@/utils/appError';
import { isDBConnected } from '@/config/db.config';

const sanitizeString = (str: string, maxLength: number = 255): string => {
  return str
    .replace(/[^\p{L}\p{N}\p{P}\p{Z}\s]/gu, '')
    .trim()
    .slice(0, maxLength);
};

const validateStringLength = (str: string, fieldName: string, maxLength: number): void => {
  if (str.length > maxLength) {
    throw new AppError(`${fieldName} is too long (max ${maxLength} characters)`, 400);
  }
  if (str.length === 0) {
    throw new AppError(`${fieldName} cannot be empty`, 400);
  }
};

const validateNumber = (num: any, fieldName: string, min: number = 0): number => {
  const parsed = Number(num);
  if (isNaN(parsed) || parsed < min) {
    throw new AppError(`${fieldName} must be a valid number >= ${min}`, 400);
  }
  return parsed;
};

export class OrdersController {
  static createOrder = catchAsync(async (req: Request, res: Response) => {
    if (!isDBConnected()) {
      throw new AppError('Database is not available', 503);
    }

    let { phone, email, city, postalCode, street, house, building, apartment, comment, items, totalAmount } = req.body;

    if (!phone || !email || !city || !postalCode || !street || !house || !building || !apartment || !items || !totalAmount) {
      throw new AppError('All required fields must be provided', 400);
    }

    if (!Array.isArray(items) || items.length === 0) {
      throw new AppError('Order must contain at least one item', 400);
    }

    if (items.length > 100) {
      throw new AppError('Order cannot contain more than 100 items', 400);
    }

    phone = sanitizeString(phone, 50);
    email = sanitizeString(email, 255);
    city = sanitizeString(city, 255);
    postalCode = sanitizeString(postalCode, 20);
    street = sanitizeString(street, 255);
    house = sanitizeString(house, 50);
    building = sanitizeString(building, 50);
    apartment = sanitizeString(apartment, 50);
    comment = comment ? sanitizeString(comment, 1000) : '';

    validateStringLength(phone, 'Phone', 50);
    validateStringLength(email, 'Email', 255);
    validateStringLength(city, 'City', 255);
    validateStringLength(postalCode, 'Postal code', 20);
    validateStringLength(street, 'Street', 255);
    validateStringLength(house, 'House', 50);
    validateStringLength(building, 'Building', 50);
    validateStringLength(apartment, 'Apartment', 50);

    totalAmount = validateNumber(totalAmount, 'Total amount', 0);

    const sanitizedItems = items.map((item: any, index: number) => {
      if (!item.cookieId || !item.title || !item.price || !item.quantity) {
        throw new AppError(`Item ${index + 1} is missing required fields`, 400);
      }

      return {
        cookieId: sanitizeString(item.cookieId, 50),
        title: sanitizeString(item.title, 255),
        price: validateNumber(item.price, `Item ${index + 1} price`, 0),
        quantity: validateNumber(item.quantity, `Item ${index + 1} quantity`, 1),
      };
    });

    try {
      const order = await Order.create({
        phone,
        email,
        city,
        postalCode,
        street,
        house,
        building,
        apartment,
        comment,
        items: sanitizedItems,
        totalAmount,
      });

      res.status(201).json({
        status: 'ok',
        message: 'Order created successfully',
        data: {
          id: order._id,
          orderNumber: order._id.toString().slice(-8).toUpperCase(),
        },
      });
    } catch (error: any) {
      if (error instanceof AppError) {
        throw error;
      }
      if (error.name === 'ValidationError') {
        throw new AppError('Invalid order data', 400);
      }
      if (error.name === 'MongoServerError') {
        throw new AppError('Database error occurred', 500);
      }
      throw error;
    }
  });
}
