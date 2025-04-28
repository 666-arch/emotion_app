import { Global, Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { WechatTokenService } from "./wechat-token.service";

@Global()
@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 2
      })
    }),
    ConfigModule
  ],
  providers: [WechatTokenService],
  exports: [WechatTokenService]
})
export class WechatModule {
  static forRoot() {
    return {
      module: WechatModule,
      providers: [
        {
          provide: "WECHAT_CONFIG",
          useFactory: (configService: ConfigService) => ({
            appId: configService.get("WECHAT_APPID"),
            appSecret: configService.get("WECHAT_SECRET")
          }),
          inject: [ConfigService]
        }
      ]
    };
  }
}