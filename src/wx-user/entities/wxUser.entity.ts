import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class WxUser{
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ unique: true })
  openid: string;
  @Column({ nullable: true })
  nickname: string;
  @Column({ nullable: true })
  avatar: string;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
  createTime: Date;
}