import { Router } from 'express';
import { CookiesController } from '@controllers/cookies.controller';

const cookiesRouter = Router();

/**
 * @swagger
 * /api/cookies:
 *   get:
 *     summary: Get cookies list with filters
 *     tags: [Cookies]
 *     parameters:
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: Cookie type
 *       - in: query
 *         name: format
 *         schema:
 *           type: string
 *         description: Cookie format
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Search by title
 *       - in: query
 *         name: cost_from
 *         schema:
 *           type: number
 *         description: Minimum price
 *       - in: query
 *         name: cost_to
 *         schema:
 *           type: number
 *         description: Maximum price
 *       - in: query
 *         name: quantity_from
 *         schema:
 *           type: number
 *         description: Minimum quantity
 *       - in: query
 *         name: quantity_to
 *         schema:
 *           type: number
 *         description: Maximum quantity
 *     responses:
 *       200:
 *         description: List of cookies
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CookiesResponse'
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
cookiesRouter.get('/', CookiesController.getCookies);

/**
 * @swagger
 * /api/cookies/{id}:
 *   get:
 *     summary: Get cookie by ID
 *     tags: [Cookies]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Cookie ID
 *     responses:
 *       200:
 *         description: Cookie data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CookieResponse'
 *       400:
 *         description: Invalid ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       404:
 *         description: Cookie not found
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
cookiesRouter.get('/:id', CookiesController.getCookieById);

export default cookiesRouter;
