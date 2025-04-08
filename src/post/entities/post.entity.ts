import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Advice } from '../../advice/entities/advice.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;
  @Column('text')
  content: string;
  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  user: User;
  @OneToMany(() => Post, (post) => post.user)
  advice: Advice[];
  @CreateDateColumn()
  create_at: Date;
  @UpdateDateColumn()
  update_at: Date;
}
