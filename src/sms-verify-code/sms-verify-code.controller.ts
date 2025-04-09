import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SmsVerifyCodeService } from './sms-verify-code.service';
import { CreateSmsVerifyCodeDto } from './dto/create-sms-verify-code.dto';
import { UpdateSmsVerifyCodeDto } from './dto/update-sms-verify-code.dto';

@Controller('sms-verify-code')
export class SmsVerifyCodeController {
  constructor(private readonly smsVerifyCodeService: SmsVerifyCodeService) {}

  @Post()
  create(@Body() createSmsVerifyCodeDto: CreateSmsVerifyCodeDto) {
    return this.smsVerifyCodeService.create(createSmsVerifyCodeDto);
  }

  @Get()
  findAll() {
    return this.smsVerifyCodeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.smsVerifyCodeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSmsVerifyCodeDto: UpdateSmsVerifyCodeDto) {
    return this.smsVerifyCodeService.update(+id, updateSmsVerifyCodeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.smsVerifyCodeService.remove(+id);
  }
}
