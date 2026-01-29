import { Router } from 'express';

import statsRouter from './stats.router';
import contactsRouter from './contacts.router';
import cookiesRouter from './cookies.router';
import feedbackRouter from './feedback.router';
import ordersRouter from './orders.router';

const rootRouter = Router();

rootRouter.use('/stats-showcase', statsRouter);
rootRouter.use('/contacts', contactsRouter);
rootRouter.use('/cookies', cookiesRouter);
rootRouter.use('/feedback', feedbackRouter);
rootRouter.use('/orders', ordersRouter);

export default rootRouter;

