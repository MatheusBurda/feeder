import { Router } from 'express';
import multer from 'multer';

import UsersController from '../controllers/UsersController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersController = new UsersController();
const usersRouter = Router();

usersRouter.post('/', usersController.create);

export default usersRouter;
