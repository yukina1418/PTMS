import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum TrainingType {
  ONETIME = 'ONETIME',
  RECURRING = 'RECURRING',
}

export enum TrainingStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

@Entity({ schema: 'training', name: 'trainings' })
export class Training {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ name: 'trainer_id', type: 'int', comment: '트레이너 ID' })
  trainerId: number;

  @Column({ name: 'member_id', type: 'int', comment: '회원 ID' })
  memberId: number;

  @Column({ name: 'status', type: 'enum', enum: TrainingStatus, comment: '트레이닝 진행 상태' })
  status: TrainingStatus;

  @Column({ name: 'training_type', type: 'enum', enum: TrainingType, comment: '트레이닝 유형' })
  trainingType: TrainingType;

  @Column({ name: 'duration', type: 'int', comment: '트레이닝 시간' })
  duration: number;

  @Column({ name: 'weekly_count', type: 'int', comment: '주단위 트레이닝 횟수', nullable: true })
  weeklyCount: number | null;

  @Column({ name: 'start_date', type: 'date', comment: '트레이닝 시작 일자' })
  startDate: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', comment: '생성 일자' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', comment: '수정 일자' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', comment: '취소 일자', nullable: true })
  deletedAt: Date | null;
}
