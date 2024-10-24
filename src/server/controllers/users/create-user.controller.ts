import { Body, Controller, Post } from '@nestjs/common';
import { createUserService } from '@src/service/user/create-user-service.effect';
import { ReqBody, Respose } from './create-user.dto';

@Controller()
export class CreateUserController {
  @Post('/users')
  async service(@Body() body: ReqBody): Respose {
    const data = await createUserService(body);

    return {
      data,
      code: 201000,
      message: 'ok',
    };
  }
}
