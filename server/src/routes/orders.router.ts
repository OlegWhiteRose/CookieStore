import { Router } from 'express';
import { OrdersController } from '@/controllers/orders.controller';

const ordersRouter = Router();

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create new order
 *     tags: [Orders]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - phone
 *               - email
 *               - city
 *               - postalCode
 *               - street
 *               - house
 *               - building
 *               - apartment
 *               - items
 *               - totalAmount
 *             properties:
 *               phone:
 *                 type: string
 *                 example: "+7 (999) 123-45-67"
 *               email:
 *                 type: string
 *                 example: "ivan@example.com"
 *               city:
 *                 type: string
 *                 example: "Москва"
 *               postalCode:
 *                 type: string
 *                 example: "123456"
 *               street:
 *                 type: string
 *                 example: "Тверская улица"
 *               house:
 *                 type: string
 *                 example: "12"
 *               building:
 *                 type: string
 *                 example: "1"
 *               apartment:
 *                 type: string
 *                 example: "45"
 *               comment:
 *                 type: string
 *                 example: "Доставить после 18:00"
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     cookieId:
 *                       type: string
 *                       example: "6977fe87366d6120d772dc44"
 *                     title:
 *                       type: string
 *                       example: "Шоколадная Мечта"
 *                     quantity:
 *                       type: number
 *                       example: 2
 *                     price:
 *                       type: number
 *                       example: 480
 *                     totalPrice:
 *                       type: number
 *                       example: 960
 *               totalAmount:
 *                 type: number
 *                 example: 960
 *     responses:
 *       201:
 *         description: Order created successfully
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
 *                   example: "Order created successfully"
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "6977fe87366d6120d772dc44"
 *                     orderNumber:
 *                       type: string
 *                       example: "D772DC44"
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
ordersRouter.post('', OrdersController.createOrder);

export default ordersRouter;
