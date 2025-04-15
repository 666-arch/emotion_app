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
      entities: [User, Post, Advice, SmsVerifyCode],
      logging: true,
      poolSize: 10,
      connectorPackage: 'mysql',
      // extra: {
      //   authPlugin: 'sha256_password',
      // },
    }),
    UserModule,
    PostModule,
    AdviceModule,
    SmsVerifyCodeModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
