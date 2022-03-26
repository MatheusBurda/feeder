import { Router } from 'express';
import multer from 'multer';

import UsersController from '../controllers/UsersController';
import UserAvatarController from '../controllers/UserAvatarController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';
import getMulterConfig from '@config/upload';

const userAvatarController = new UserAvatarController();
const usersController = new UsersController();
const usersRouter = Router();
const upload = multer(getMulterConfig('image'));

usersRouter.post('/', usersController.create);

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  userAvatarController.update,
);

export default usersRouter;
