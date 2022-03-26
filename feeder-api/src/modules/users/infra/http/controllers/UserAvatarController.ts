import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateUserAvatarService from '@modules/users/services/UpdateUserAvatarService';

export default class UserAvatarController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userResponse } = await updateUserAvatar.execute({
      userId: request.user.id,
      key: request?.file?.filename ?? '',
      path: request?.file?.path ?? '',
      mimeType: request?.file?.mimetype ?? '',
      size: request?.file?.size ?? 0
    });

    return response.json(userResponse);
  }
}
