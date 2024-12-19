import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ schema: 'user', name: 'members' })
export class Member {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'varchar', length: 6, comment: '이름' })
  name: string;

  @Column({ type: 'varchar', length: 12, unique: true, comment: '전화번호' })
  phone: string;

  @Column({ type: 'varchar', length: 255, comment: '비밀번호' })
  password: string;

  @Column({ type: 'enum', comment: '성별' })
  gender: string;

  @Column({ type: 'varchar', length: 10, comment: '생년월일' })
  birth: string;

  @Column({ type: 'varchar', length: 255, comment: '특이사항' })
  note: string;

  @CreateDateColumn({ type: 'timestamp', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', comment: '수정일' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', comment: '삭제일' })
  deletedAt: Date;
}
