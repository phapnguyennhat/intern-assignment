import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, DataSource, Not, IsNull, MoreThanOrEqual, LessThan } from 'typeorm';
import { ExamResult } from 'src/database/entity/examResult.entity';
import { GroupSubject } from 'src/types/groupSubject';
import { EOrder } from 'src/common/enum/order.enum';
import { EScoreLevel } from './dto/scoreReport.query';
import { ESubject } from './dto/scoreReport.query';
@Injectable()
export class ExamService {
    constructor(@InjectRepository(ExamResult) private readonly examRepo: Repository<ExamResult>,
    private readonly dataSource: DataSource
    ) { }

    async checkScore(sbd: string) {
        const examResult = await this.examRepo.findOne({ where: { sbd } })
        if (!examResult) {
            throw new NotFoundException('SBD does not exist')
        }
        return examResult
    }

    async getScoreReport(subject: ESubject) {
      

        const excellent = await this.examRepo.createQueryBuilder('examResult').where(`examResult.${subject} >= 8.0`).getCount()
        const good = await this.examRepo.createQueryBuilder('examResult').where(`examResult.${subject} >= 6.0`).andWhere(`examResult.${subject} < 8.0`).getCount()
        const average = await this.examRepo.createQueryBuilder('examResult').where(`examResult.${subject} >= 4.0`).andWhere(`examResult.${subject} < 6.0`).getCount()
        const weak = await this.examRepo.createQueryBuilder('examResult').where(`examResult.${subject} < 4.0`).getCount()

        const total = excellent + good + average + weak
        
        if(total === 0) {
            throw new NotFoundException('No data found')
        }



        return {total, excellent, good, average, weak, subject}


    }

  
    async getStudentByGroup(groupSubject: GroupSubject, order: EOrder, page: number, limit: number) {
        const { subject1, subject2, subject3, ma_ngoai_ngu } = groupSubject;
        const queryBuilder = this.dataSource
            .createQueryBuilder(ExamResult, 'examResult')
            .andWhere(`examResult.${subject1} is not null`)
            .andWhere(`examResult.${subject2} is not null`)
            .andWhere(`examResult.${subject3} is not null`)
            .select([
                'examResult.sbd',
                `examResult.${subject1}`,
                `examResult.${subject2}`,
                `examResult.${subject3}`,
                'examResult.ma_ngoai_ngu',
       
              
            ])
            .limit(limit)
            .offset((page - 1) * limit)
            .orderBy(`examResult.${subject1} + examResult.${subject2} + examResult.${subject3}`, order).addOrderBy('examResult.sbd', order);;
    
        if (ma_ngoai_ngu) {
            queryBuilder.andWhere('examResult.ma_ngoai_ngu = :ma_ngoai_ngu', { ma_ngoai_ngu });
        }
    
        const [data, count] = await queryBuilder.getManyAndCount();

        if(count === 0) {
            throw new NotFoundException('No data found')
        }
        return {
            data,
            count,
        };
    }
}
