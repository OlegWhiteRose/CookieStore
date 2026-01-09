import { Router } from 'express';
import { ContactsController } from '@/controllers/contacts.controller';

const contactsRouter = Router();

contactsRouter.get('', ContactsController.getContacts);

export default contactsRouter;
