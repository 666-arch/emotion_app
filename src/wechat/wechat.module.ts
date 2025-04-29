// src/wechat/wechat.module.ts
import { Module, Global } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager'; // 新增
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WechatTokenService } from './wechat-token.service';

@Global() // 确保全局可用
@Module({
  imports: [
    // 必须导入 CacheModule 才能注入 CACHE_MANAGER
    CacheModule.register(), // 👈 核心修复点

    HttpModule.registerAsync({
      useFactory: () => ({
        timeout: 5000,
        maxRedirects: 2,
      }),
    }),

    ConfigModule.forFeature(() => ({
      WECHAT_APPID: process.env.WECHAT_APPID,
      WECHAT_SECRET: process.env.WECHAT_SECRET,
    })),
  ],
  providers: [
    WechatTokenService,
    // 配置提供者
    {
      provide: 'WECHAT_CONFIG',
      useFactory: (configService: ConfigService) => ({
        appId: configService.get('WECHAT_APPID'),
        appSecret: configService.get('WECHAT_SECRET'),
      }),
      inject: [ConfigService],
    },
  ],
  exports: [WechatTokenService],
})
export class WechatModule {}