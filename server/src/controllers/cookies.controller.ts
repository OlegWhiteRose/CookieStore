import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { catchAsync } from '@middleware/async.middleware';
import { Cookie } from '@models/cookie.model';
import { AppError } from '@/utils/appError';

interface CookiesQuery {
  type?: string;
  cost_from?: string;
  cost_to?: string;
  quantity_from?: string;
  quantity_to?: string;
  format?: string;
  title?: string;
}

const MINIO_URL = `http://${process.env.MINIO_ENDPOINT}:${process.env.MINIO_PORT}/${process.env.MINIO_BUCKET}`;

const mapCookie = (cookie: any) => ({
  id: cookie._id,
  title: cookie.title,
  price: cookie.price,
  format: cookie.format,
  type: cookie.type,
  img_url: cookie.imgUrl ? `${MINIO_URL}${cookie.imgUrl}` : null,
  description: cookie.description,
  ingredients: cookie.ingredients,
  address: cookie.address,
  quantity: cookie.quantity,
});

export class CookiesController {
  /**
   * @desc    Получить список печенек с фильтрацией
   * @route   GET /api/cookies
   */
  static getCookies = catchAsync(async (req: Request, res: Response) => {
    const { type, cost_from, cost_to, quantity_from, quantity_to, format, title } = req.query as CookiesQuery;

    const filter: Record<string, unknown> = {};

    if (type) filter.type = type;
    if (format) filter.format = format;
    if (title) filter.title = { $regex: title, $options: 'i' };

    if (cost_from || cost_to) {
      filter.price = {};
      if (cost_from) (filter.price as Record<string, number>).$gte = Number(cost_from);
      if (cost_to) (filter.price as Record<string, number>).$lte = Number(cost_to);
    }

    if (quantity_from || quantity_to) {
      filter.quantity = {};
      if (quantity_from) (filter.quantity as Record<string, number>).$gte = Number(quantity_from);
      if (quantity_to) (filter.quantity as Record<string, number>).$lte = Number(quantity_to);
    }

    const cookies = await Cookie.find(filter).lean();
    const allCookies = await Cookie.find().lean();

    const maxPrice = Math.max(...allCookies.map((c) => c.price));
    const maxQuantity = Math.max(...allCookies.map((c) => c.quantity));

    res.status(200).json({
      status: 'ok',
      data: cookies.map(mapCookie),
      max_price: maxPrice,
      max_quantity: maxQuantity,
    });
  });

  /**
   * @desc    Получить печеньку по ID
   * @route   GET /api/cookies/:id
   */
  static getCookieById = catchAsync(async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new AppError('Invalid cookie ID format', 400);
    }

    const cookie = await Cookie.findById(id).lean();

    if (!cookie) {
      throw new AppError('Cookie not found', 404);
    }

    res.status(200).json({ status: 'ok', data: mapCookie(cookie) });
  });
}
