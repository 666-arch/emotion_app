import { Controller, Get, Post } from "@nestjs/common";
import { WechatTokenService } from "./wechat-token.service";

@Controller('auth')
export class WechatController {
  constructor(private readonly tokenService: WechatTokenService) {
  }

  @Get("/wechat-token")
  async getWechatToken() {
    return {
      token: await this.tokenService.getAccessToken()
    };
  }

  @Post('wechat-session')
  async getWechatSession() {

  }
}