import { Module } from '@nestjs/common';
import { ExamService } from './exam.service';
import { ExamController } from './exam.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExamResult } from 'src/database/entity/examResult.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExamResult])],
  controllers: [ExamController],
  providers: [ExamService],
})  
export class ExamModule {}
