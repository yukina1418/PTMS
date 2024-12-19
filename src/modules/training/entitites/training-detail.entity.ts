import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity({ schema: 'training', name: 'training_detail' })
export class TrainingDetail {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column({ name: 'training_id', comment: '트레이닝 아이디' })
  trainingId: number;

  @Column({ name: 'day_of_week', comment: '요일' })
  dayOfWeek: number;

  @Column({ name: 'start_time', type: 'time', comment: '레슨 시작 시간' })
  startTime: string;

  @Column({ name: 'end_time', type: 'time', comment: '레슨 종료 시간' })
  endTime: string;

  @Column({ name: 'scheduled_at', type: 'timestamp', comment: '1회 레슨 시 특정 날짜', nullable: true })
  scheduledAt: Date | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp', comment: '생성일' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp', comment: '수정일' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', comment: '취소 일자' })
  deletedAt: Date | null;
}
