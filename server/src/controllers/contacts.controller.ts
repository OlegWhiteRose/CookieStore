import { Request, Response } from 'express';
import { catchAsync } from '@middleware/async.middleware';
import { Contact } from '@models/contact.model';

export class ContactsController {
  /**
   * @desc    Получить контактную информацию
   * @route   GET /api/contacts
   */
  static getContacts = catchAsync(async (_req: Request, res: Response) => {
    const contact = await Contact.findOne().select('-_id phone email address inn');

    res.status(200).json({ status: 'ok', data: contact });
  });
}
