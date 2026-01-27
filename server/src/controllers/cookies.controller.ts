import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { catchAsync } from '@middleware/async.middleware';
import { Cookie } from '@models/cookie.model';
import { AppError } from '@/utils/appError';
import { getMinioUrl } from '@config/minio.config';

interface CookiesQuery {
  type?: string;
  cost_from?: string;
  cost_to?: string;
  quantity_from?: string;
  quantity_to?: string;
  format?: string;
  title?: string;
}

const mapCookie = (cookie: any) => ({
  id: cookie._id,
  title: cookie.title,
  price: cookie.price,
  format: cookie.format,
  type: cookie.type,
  img_url: cookie.imgUrl ? `${getMinioUrl()}${cookie.imgUrl}` : null,
  description: cookie.description,
  ingredients: cookie.ingredients,
  address: cookie.address,
  quantity: cookie.quantity,
});

export class CookiesController {
  static getCookies = catchAsync(async (req: Request, res: Response) => {
    const { type, cost_from, cost_to, quantity_from, quantity_to, format, title } = req.query as CookiesQuery;

    const validateNumber = (value: string | undefined, fieldName: string): number | undefined => {
      if (!value) return undefined;
      const num = Number(value);
      if (isNaN(num) || num < 0) {
        throw new AppError(`Invalid ${fieldName}: must be a positive number`, 400);
      }
      return num;
    };

    const costFrom = validateNumber(cost_from, 'cost_from');
    const costTo = validateNumber(cost_to, 'cost_to');
    const quantityFrom = validateNumber(quantity_from, 'quantity_from');
    const quantityTo = validateNumber(quantity_to, 'quantity_to');

    if (costFrom && costTo && costFrom > costTo) {
      throw new AppError('cost_from cannot be greater than cost_to', 400);
    }

    if (quantityFrom && quantityTo && quantityFrom > quantityTo) {
      throw new AppError('quantity_from cannot be greater than quantity_to', 400);
    }

    const filter: Record<string, unknown> = {};

    if (type) filter.type = type;
    if (format) filter.format = format;
    if (title) filter.title = { $regex: title, $options: 'i' };

    if (costFrom || costTo) {
      filter.price = {};
      if (costFrom) (filter.price as Record<string, number>).$gte = costFrom;
      if (costTo) (filter.price as Record<string, number>).$lte = costTo;
    }

    if (quantityFrom || quantityTo) {
      filter.quantity = {};
      if (quantityFrom) (filter.quantity as Record<string, number>).$gte = quantityFrom;
      if (quantityTo) (filter.quantity as Record<string, number>).$lte = quantityTo;
    }

    try {
      const cookies = await Cookie.find(filter).lean();
      const allCookies = await Cookie.find().lean();

      const maxPrice = allCookies.length > 0 ? Math.max(...allCookies.map((c) => c.price)) : 0;
      const maxQuantity = allCookies.length > 0 ? Math.max(...allCookies.map((c) => c.quantity)) : 0;

      res.status(200).json({
        status: 'ok',
        data: cookies.map(mapCookie),
        max_price: maxPrice,
        max_quantity: maxQuantity,
      });
    } catch (error: any) {
      if (error.name === 'MongoServerError') {
        throw new AppError('Database error', 500);
      }
      throw error;
    }
  });

  static getCookieById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new AppError('Invalid cookie ID format', 400);
    }

    try {
      const cookie = await Cookie.findById(id).lean();

      if (!cookie) {
        throw new AppError('Cookie not found', 404);
      }

      res.status(200).json({ status: 'ok', data: mapCookie(cookie) });
    } catch (error: any) {
      if (error instanceof AppError) {
        throw error;
      }
      if (error.name === 'CastError') {
        throw new AppError('Invalid cookie ID', 400);
      }
      if (error.name === 'MongoServerError') {
        throw new AppError('Database error', 500);
      }
      throw error;
    }
  });
}

