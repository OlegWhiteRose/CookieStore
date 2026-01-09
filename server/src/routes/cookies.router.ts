import { Router } from 'express';
import { CookiesController } from '@controllers/cookies.controller';

const cookiesRouter = Router();

cookiesRouter.get('/', CookiesController.getCookies);
cookiesRouter.get('/:id', CookiesController.getCookieById);

export default cookiesRouter;

