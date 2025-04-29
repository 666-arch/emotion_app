import { Module } from '@nestjs/common';
import { WxUserService } from './wx-user.service';
import { WxUserController } from './wx-user.controller';
import { HttpService } from "@nestjs/axios";

@Module({
  controllers: [WxUserController],
  providers: [WxUserService],
})
export class WxUserModule {}
