import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "手机号不能为空" })
  phone_number: string;
  @IsNotEmpty({ message: "密码不能为空" })
  password: string;
  @IsNotEmpty({ message: '验证码不能为空' })
  smsCode: string;
}
