import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class SmsVerifyCode {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 20, comment: "手机号" })
  phone_number: string;
  @Column({ length: 6, comment: "验证码" })
  code: string;
  @Column({ type: "enum", enum: ["unused", "used"], default: "unused" })
  status: string;
  @Column({ type: "timestamp", comment: "过期时间" })
  expire_at: Date;
  @CreateDateColumn()
  create_at: Date;
}
