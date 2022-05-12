import ICurrentTimeDto from '@modules/firmwares/dtos/ICurrentTimeDto';
import CreateFirmwareService from '@modules/firmwares/services/CreateFirmwareService';
import GetFirmwareService from '@modules/firmwares/services/GetFirmwareService';
import ListUserFirmwaresService from '@modules/firmwares/services/ListUserFirmwaresService';
import NotifyRechargeService from '@modules/firmwares/services/NotifyRechargeService';
import UpdateFirmwareService from '@modules/firmwares/services/UpdateFirmwareService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class FirmwaresControllers {
  public async create(request: Request, response: Response): Promise<Response> {
    const createService = container.resolve(CreateFirmwareService);

    const firmware = await createService.execute({
      ownerId: request.user.id,
      ...request.body
    });

    return response.json(firmware);
  }

  public async notifyRecharge(request: Request, response: Response): Promise<Response> {
    const ownerId = request.user.id;
    const firmwareId = request.params.id;
    const notifyService = container.resolve(NotifyRechargeService);
    const { value } = request.body;

    const result = await notifyService.execute(firmwareId, ownerId, value ?? false);

    return response.json({ success: result });
  }

  public async findById(request: Request, response: Response): Promise<Response> {
    const getService = container.resolve(GetFirmwareService);

    const firmware = await getService.execute(request.params.id);

    return response.json(firmware);
  }

  public async listByUserId(request: Request, response: Response): Promise<Response> {
    const listService = container.resolve(ListUserFirmwaresService);

    const firmwares = await listService.execute(request.user.id);

    return response.json(firmwares);
  }

  public async updateById(request: Request, response: Response): Promise<Response> {
    const updateService = container.resolve(UpdateFirmwareService);

    const firmware = await updateService.execute(request.body);

    return response.json(firmware);
  }

  public async getCurrentTime(request: Request, response: Response): Promise<Response> {
    const current = new Date();

    const time: ICurrentTimeDto = {
      hours: current.getUTCHours() - 3, // Brazilian Date
      minutes: current.getUTCMinutes(),
      seconds: current.getUTCSeconds()
    };

    return response.json(time);
  }
}
