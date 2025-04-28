import { Inject, Injectable, Logger } from "@nestjs/common";
import { WechatConfig } from "./wechat.interface";
import { HttpService } from "@nestjs/axios";
import { Cache } from "cache-manager";
import { firstValueFrom } from "rxjs";

@Injectable()
export class WechatTokenService {
  private readonly logger = new Logger(WechatTokenService.name);
  private config: WechatConfig;

  constructor(
    @Inject(Cache) private cacheManager: Cache,
    private httpService: HttpService
  ) {
  }
  setConfig(config: WechatConfig){
    this.config = {
      tokenCacheKey: 'wechat_access_token', //默认token
      ...config
    }
  }

  async getAccessToken(): Promise<string> {
    //尝试从缓存获取
    const cachedToken = await this.cacheManager.get<string>(this.config.tokenCacheKey);
    //存在就直接返回
    if (cachedToken) return cachedToken;
    //请求新token
    try {
      const url = 'https://api.weixin.qq.com/cgi-bin/token'
      const response = await firstValueFrom(
        this.httpService.get(url, {
          params: {
            grant_type: 'client_credential',
            appid: this.config.appId,
            secret: this.config.appSecret
          }
        })
      )
      if (!response.data.access_token){
        throw new Error('微信 token 获取失败：' + JSON.stringify(response.data))
      }

      const expiresIn = response.data.expires_in || 7200;
      await this.cacheManager.set(
        this.config.tokenCacheKey,
        response.data.access_token,
        (expiresIn - 300) * 100, //转为毫秒
      );
      return response.data.access_token;
    }catch (error){
      this.logger.error('微信 Token 获取失败', error.stack);
      throw new Error('微信服务暂时不可用：' + error.message)
    }
  }
}