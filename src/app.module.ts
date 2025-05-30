import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Post } from './post/entities/post.entity';
import { PostModule } from './post/post.module';
import { AdviceModule } from './advice/advice.module';
import { Advice } from './advice/entities/advice.entity';
import { SmsVerifyCodeModule } from './sms-verify-code/sms-verify-code.module';
import { SmsVerifyCode } from "./sms-verify-code/entities/sms-verify-code.entity";
import { EmailModule } from './email/email.module';
import { ConfigModule } from "@nestjs/config";
import { WechatModule } from "./wechat/wechat.module";
import { WxUserModule } from './wx-user/wx-user.module';
import { WxUser } from "./wx-user/entities/wxUser.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'xzy20000219',
      database: 'login_test',
      synchronize: true,
      entities: [User, Post, Advice, SmsVerifyCode, WxUser],
      logging: true,
      poolSize: 10,
      connectorPackage: 'mysql',
    }),
    UserModule,
    PostModule,
    AdviceModule,
    SmsVerifyCodeModule,
    EmailModule,
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    WechatModule,
    WxUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}