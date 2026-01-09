import { Request, Response } from 'express';
import { catchAsync } from '@middleware/async.middleware';
import { Stat } from '@models/stat.model';

export class StatsController {
  /**
   * @desc    Получить showcase статистику
   * @route   GET /api/stats-showcase
   */
  static getStats = catchAsync(async (_req: Request, res: Response) => {
    const stats = await Stat.find().lean();

    const result = stats.map(({ number, statType }) => ({
      number,
      type: statType,
    }));

    res.status(200).json({ status: 'ok', data: result });
  });
}


