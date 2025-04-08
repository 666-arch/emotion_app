import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Post } from '../../post/entities/post.entity';
@Entity()
export class Advice {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  content: string;
  @CreateDateColumn()
  create_at: Date;
  @ManyToOne(() => Post, (post) => post.advice, { onDelete: 'CASCADE' })
  post: Post;
}
