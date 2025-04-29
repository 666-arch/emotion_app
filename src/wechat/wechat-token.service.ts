// src/wechat/wechat-token.service.ts
import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { firstValueFrom } from 'rxjs';
import { WechatConfig } from './wechat.interface';

@Injectable()
export class WechatTokenService {
  private readonly logger = new Logger(WechatTokenService.name);
  // private config: WechatConfig;

  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private httpService: HttpService,
    @Inject('WECHAT_CONFIG') private wechatConfig: WechatConfig,
  ) {}

  async getAccessToken(): Promise<string> {
    // 尝试从缓存获取
    const cachedToken = await this.cacheManager.get<string>(
      this.wechatConfig.tokenCacheKey || 'wechat_access_token',
    );

    if (cachedToken) {
      return cachedToken;
    }

    // 请求新 Token
    try {
      const url = `https://api.weixin.qq.com/cgi-bin/token`;
      const response = await firstValueFrom(
        this.httpService.get(url, {
          params: {
            grant_type: 'client_credential',
            appid: this.wechatConfig.appId,
            secret: this.wechatConfig.appSecret,
          },
        }),
      );

      if (!response.data.access_token) {
        throw new Error('微信 token 获取失败：' + JSON.stringify(response.data));
      }

      // 缓存 Token（提前 5 分钟过期）
      const expiresIn = response.data.expires_in || 7200;
      await this.cacheManager.set(
        this.wechatConfig.tokenCacheKey,
        response.data.access_token,
        (expiresIn - 300) * 1000, // 转换为毫秒
      );

      return response.data.access_token;
    } catch (error) {
      this.logger.error('微信 Token 获取失败', error.stack);
      throw new Error(`微信服务暂时不可用: ${error.message}`);
    }
  }
}