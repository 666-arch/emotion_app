import { Module } from '@nestjs/common';
import { SmsVerifyCodeService } from './sms-verify-code.service';
import { SmsVerifyCodeController } from './sms-verify-code.controller';

@Module({
  controllers: [SmsVerifyCodeController],
  providers: [SmsVerifyCodeService],
})
export class SmsVerifyCodeModule {}
