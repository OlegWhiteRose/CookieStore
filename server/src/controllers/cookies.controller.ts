import { Request, Response } from 'express';
import { catchAsync } from '@middleware/async.middleware';

export class CookiesController {
  static getCookies = catchAsync(async (req: Request, res: Response) => {
    res.status(404);
  });
}
