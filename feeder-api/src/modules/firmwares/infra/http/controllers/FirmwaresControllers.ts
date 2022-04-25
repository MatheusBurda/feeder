import CreateFirmwareService from '@modules/firmwares/services/CreateFirmwareService';
import GetFirmwareService from '@modules/firmwares/services/GetFirmwareService';
import ListUserFirmwaresService from '@modules/firmwares/services/ListUserFirmwaresService';
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

  public async findById(request: Request, response: Response): Promise<Response> {
    const getService = container.resolve(GetFirmwareService);

    const firmware = await getService.execute(request.params.id);

    return response.json(firmware);
  }

  public async listByUserId(request: Request, response: Response): Promise<Response> {
    const listService = container.resolve(ListUserFirmwaresService);

    const firmwares = await listService.execute(request.params.ownerId);

    return response.json(firmwares);
  }

  public async updateById(request: Request, response: Response): Promise<Response> {
    const updateService = container.resolve(UpdateFirmwareService);

    const firmware = await updateService.execute(request.body);

    return response.json(firmware);
  }
}
