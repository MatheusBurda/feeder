import ensureAuthenticated from "@modules/users/infra/http/middlewares/ensureAuthenticated";
import { Router } from "express";
import FirmwaresControllers from "../controllers/FirmwaresControllers";

const firmwareRouter = Router();
const firmwareController = new FirmwaresControllers();

firmwareRouter.post('', ensureAuthenticated, firmwareController.create);

firmwareRouter.patch(':id', ensureAuthenticated, firmwareController.notifyRecharge);

firmwareRouter.put(':id', ensureAuthenticated, firmwareController.updateById);

firmwareRouter.get('', ensureAuthenticated, firmwareController.listByUserId);

firmwareRouter.get(':id', firmwareController.findById);

firmwareRouter.get('time', firmwareController.getCurrentTime)

export default firmwareRouter;
