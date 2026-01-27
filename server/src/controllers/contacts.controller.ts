import { Request, Response } from 'express';
import { catchAsync } from '@middleware/async.middleware';
import { Contact } from '@models/contact.model';
import { AppError } from '@/utils/appError';

export class ContactsController {
  static getContacts = catchAsync(async (_req: Request, res: Response) => {
    try {
      const contact = await Contact.findOne().select('-_id phone email address inn');

      if (!contact) {
        throw new AppError('Contacts not found', 404);
      }

      res.status(200).json({ status: 'ok', data: contact });
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
