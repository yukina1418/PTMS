import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ schema: 'user', name: 'trainers' })
export class Trainer {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 6, comment: '이름' })
  name: string;

  @Column({ type: 'varchar', length: 10, comment: '닉네임' })
  nickname: string;

  @Column({ type: 'varchar', length: 12, unique: true, comment: '전화번호' })
  phone: string;

  @Column({ type: 'varchar', length: 255, comment: '비밀번호' })
  password: string;

  @Column({ type: 'enum', comment: '성별' })
  gender: string;

  @Column({ type: 'enum', comment: '직책' })
  role: string;

  @Column({ type: 'jsonb', comment: '커리어' })
  career: Record<string, any>;

  @CreateDateColumn({ type: 'timestamp', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: '수정일' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', comment: '삭제일' })
  deletedAt: Date;
}
