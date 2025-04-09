import { Injectable } from '@nestjs/common';
import { CreateSmsVerifyCodeDto } from './dto/create-sms-verify-code.dto';
import { UpdateSmsVerifyCodeDto } from './dto/update-sms-verify-code.dto';

@Injectable()
export class SmsVerifyCodeService {
  create(createSmsVerifyCodeDto: CreateSmsVerifyCodeDto) {
    return 'This action adds a new smsVerifyCode';
  }

  findAll() {
    return `This action returns all smsVerifyCode`;
  }

  findOne(id: number) {
    return `This action returns a #${id} smsVerifyCode`;
  }

  update(id: number, updateSmsVerifyCodeDto: UpdateSmsVerifyCodeDto) {
    return `This action updates a #${id} smsVerifyCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} smsVerifyCode`;
  }
}
