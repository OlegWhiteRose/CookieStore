import { Request, Response } from 'express';
import { catchAsync } from '@middleware/async.middleware';

export class StatsController {
    /**
   * @desc    Получить showcase статистику
   * @route   GET /api/stats-showcase
   */
    static getStats = catchAsync(async (req: Request, res: Response) => {
        const stats = [
            {
            "number": "12408",
            "type": "cookies_sold"
            },
            {
            "number": "1000+",
            "type": "clients"
            },
            {
            "number": "3255",
            "type": "reviews"
            }
        ];

        res.status(200).json({ status: 'ok', data: stats });
    });
}
