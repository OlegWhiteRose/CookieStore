import { Router } from 'express';
import { StatsController } from '@/controllers/stats.controller';

const statsRouter = Router();

statsRouter.get('', StatsController.getStats);

export default statsRouter;

