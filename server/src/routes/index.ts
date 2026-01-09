import { Router } from 'express';

import statsRouter from './stats.router';
import contactsRouter from './contacts.router';

const rootRouter = Router();

rootRouter.use('/stats-showcase', statsRouter);
rootRouter.use('/contacts', contactsRouter);

export default rootRouter;

