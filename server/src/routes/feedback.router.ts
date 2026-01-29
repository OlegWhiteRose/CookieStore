import { Router } from 'express';
import { FeedbackController } from '@/controllers/feedback.controller';

const feedbackRouter = Router();

/**
 * @swagger
 * /api/feedback:
 *   post:
 *     summary: Submit feedback form
 *     tags: [Feedback]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - contactInfo
 *               - message
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Иван Иванов"
 *               contactInfo:
 *                 type: string
 *                 example: "+7 (999) 123-45-67, ivan@example.com"
 *               message:
 *                 type: string
 *                 example: "Хочу узнать о доставке"
 *     responses:
 *       201:
 *         description: Feedback submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: ok
 *                 message:
 *                   type: string
 *                   example: "Feedback submitted successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *       400:
 *         description: Validation error
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
feedbackRouter.post('', FeedbackController.createFeedback);

export default feedbackRouter;
