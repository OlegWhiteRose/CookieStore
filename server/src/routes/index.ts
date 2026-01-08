import { Router } from 'express';

import statsRouter from './stats.router';

const rootRouter = Router();

rootRouter.use('/stats-showcase', statsRouter);

export default rootRouter;

