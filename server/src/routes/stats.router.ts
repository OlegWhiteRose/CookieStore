import { Router } from 'express';
import { StatsController } from '@/controllers/stats.controller';

const statsRouter = Router();

/**
 * @swagger
 * /api/stats-showcase:
 *   get:
 *     summary: Get showcase statistics
 *     tags: [Stats]
 *     responses:
 *       200:
 *         description: Statistics for showcase
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/StatsResponse'
 *       404:
 *         description: Statistics not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
statsRouter.get('', StatsController.getStats);

export default statsRouter;
