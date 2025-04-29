import { Controller } from '@nestjs/common';
import { WxUserService } from './wx-user.service';

@Controller('wxUser')
export class WxUserController {
  constructor(private readonly wxUserService: WxUserService) {

  }
}
