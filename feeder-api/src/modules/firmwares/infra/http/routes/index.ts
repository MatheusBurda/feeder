import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";

const firmwareRouter = Router();

firmwareRouter.post('', ensureAuthenticated);

firmwareRouter.put(':id', ensureAuthenticated);

firmwareRouter.get(':id');

export default firmwareRouter;
