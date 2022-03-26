import { Router } from 'express';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes_v1 = Router();

routes_v1.use('/users', usersRouter);
routes_v1.use('/sessions', sessionsRouter);

export default routes_v1;
