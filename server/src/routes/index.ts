import { Router } from 'express';

import statsRouter from './stats.router';
import contactsRouter from './contacts.router';
import cookiesRouter from './cookies.router';

const rootRouter = Router();

rootRouter.use('/stats-showcase', statsRouter);
rootRouter.use('/contacts', contactsRouter);
rootRouter.use('/cookies', cookiesRouter);

export default rootRouter;

