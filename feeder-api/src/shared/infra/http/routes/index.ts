import { Router } from 'express';
import routes_v1 from './v1';

const routes = Router();

routes.use('/v1', routes_v1);

export default routes;
