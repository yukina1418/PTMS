import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ schema: 'training', name: 'training_history' })
export class TrainingHistory {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ name: 'training_id', comment: '트레이닝 아이디' })
  trainingId: number;

  @Column({ name: 'training_log', type: 'jsonb', comment: '트레이닝 로그' })
  trainingLog: Record<string, any>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', comment: '수정일' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', comment: '취소 일자' })
  deletedAt: Date | null;
}
