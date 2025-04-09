import { PartialType } from '@nestjs/mapped-types';
import { CreateSmsVerifyCodeDto } from './create-sms-verify-code.dto';

export class UpdateSmsVerifyCodeDto extends PartialType(CreateSmsVerifyCodeDto) {}
