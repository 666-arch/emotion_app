import { Controller, ExecutionContext, Get } from "@nestjs/common";
import { AppService } from "./app.service";
import { Request } from "express";
import { WechatTokenService } from "./wechat/wechat-token.service";

@Controller()
export class AppController {
  constructor(private readonly tokenService: WechatTokenService) {
  }

  // @Get("/wechat-token")
  // async getWechatToken() {
  //   return {
  //     token: await this.tokenService.getAccessToken()
  //   };
  // }
}
