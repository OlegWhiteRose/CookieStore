import { Request, Response } from 'express';
import { catchAsync } from '@middleware/async.middleware';
import { Feedback } from '@models/feedback.model';
import { AppError } from '@/utils/appError';
import { isDBConnected } from '@/config/db.config';

const sanitizeString = (str: string): string => {
  return str
    .replace(/[^\p{L}\p{N}\p{P}\p{Z}\s]/gu, '')
    .trim()
    .slice(0, 1000);
};

const validateStringLength = (str: string, fieldName: string, maxLength: number): void => {
  if (str.length > maxLength) {
    throw new AppError(`${fieldName} is too long (max ${maxLength} characters)`, 400);
  }
  if (str.length === 0) {
    throw new AppError(`${fieldName} cannot be empty`, 400);
  }
};

export class FeedbackController {
  static createFeedback = catchAsync(async (req: Request, res: Response) => {
    if (!isDBConnected()) {
      throw new AppError('Database is not available', 503);
    }

    let { name, contactInfo, message } = req.body;

    if (!name || !contactInfo || !message) {
      throw new AppError('Name, contactInfo and message are required', 400);
    }

    name = sanitizeString(name);
    contactInfo = sanitizeString(contactInfo);
    message = sanitizeString(message);

    validateStringLength(name, 'Name', 255);
    validateStringLength(contactInfo, 'Contact info', 255);
    validateStringLength(message, 'Message', 1000);

    try {
      const feedback = await Feedback.create({
        name,
        contactInfo,
        message,
      });

      res.status(201).json({
        status: 'ok',
        message: 'Feedback submitted successfully',
        data: {
          id: feedback._id,
        },
      });
    } catch (error: any) {
      if (error instanceof AppError) {
        throw error;
      }
      if (error.name === 'ValidationError') {
        throw new AppError('Invalid feedback data', 400);
      }
      if (error.name === 'MongoServerError') {
        throw new AppError('Database error occurred', 500);
      }
      throw error;
    }
  });
}
