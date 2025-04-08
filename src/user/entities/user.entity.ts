import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Post } from '../../post/entities/post.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 20, unique: true, comment: '手机号' })
  phone_number: string;
  @Column({ length: 255, comment: '密码' })
  password: string; //加密存储
  @Column({ nullable: true, length: 50, comment: '昵称', default: '匿名' })
  nickname: string;
  @Column({ nullable: true, comment: '头像' })
  avatar: string;
  @CreateDateColumn({ comment: '创建时间' })
  create_at: Date;
  @UpdateDateColumn({ comment: '更新时间' })
  update_at: Date;
  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
}
