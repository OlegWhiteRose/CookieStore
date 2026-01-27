import { Router } from 'express';
import { ContactsController } from '@/controllers/contacts.controller';

const contactsRouter = Router();

/**
 * @swagger
 * /api/contacts:
 *   get:
 *     summary: Get contact information
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Contact information
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ContactResponse'
 *       404:
 *         description: Contacts not found
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
contactsRouter.get('', ContactsController.getContacts);

export default contactsRouter;
