import { Request, Response } from 'express';
import { catchAsync } from '@middleware/async.middleware';
import { Stat } from '@models/stat.model';
import { AppError } from '@/utils/appError';

export class StatsController {
  static getStats = catchAsync(async (_req: Request, res: Response) => {
    try {
      const stats = await Stat.find().lean();

      if (!stats || stats.length === 0) {
        throw new AppError('Stats not found', 404);
      }

      const result = stats.map(({ number, statType }) => ({
        number,
        type: statType,
      }));

      res.status(200).json({ status: 'ok', data: result });
    } catch (error: any) {
      if (error instanceof AppError) {
        throw error;
      }
      if (error.name === 'MongoServerError') {
        throw new AppError('Database error occurred', 500);
      }
      throw error;
    }
  });
}


