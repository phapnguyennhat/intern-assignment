import { Controller, Get, Inject, Param, Query, UseInterceptors } from '@nestjs/common';
import { CACHE_MANAGER, CacheInterceptor } from '@nestjs/cache-manager';
import { ExamService } from './exam.service';
import { CheckScoreQuery } from './dto/checkScore.query';
import { EGroupType, GroupQuery } from './dto/group.query';
import { GROUP_B, GROUP_D07, GROUP_A, GROUP_A01 } from 'src/common/constant';
import { ScoreReportQuery } from './dto/scoreReport.query';



@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService,
 
  ) { }

  @Get('student')
  async checkScore(@Query() { sbd }: CheckScoreQuery) {
    return this.examService.checkScore(sbd)
  }

  @Get('score-report')
  @UseInterceptors(CacheInterceptor)  
  async getScoreReport(@Query() { subject }: ScoreReportQuery) {
    return this.examService.getScoreReport(subject);
  }

  @Get('group')
  @UseInterceptors(CacheInterceptor)
  async getStudentByGroup(@Query() { groupType, order, page, limit }: GroupQuery) {

    if (groupType === EGroupType.A) {
      return this.examService.getStudentByGroup(GROUP_A, order, page, limit)
    }
    else if (groupType === EGroupType.A01) {
      return this.examService.getStudentByGroup(GROUP_A01, order, page, limit)
    }
    else if (groupType === EGroupType.B) {
      return this.examService.getStudentByGroup(GROUP_B, order, page, limit)
    }
    else if (groupType === EGroupType.D07) {
      return this.examService.getStudentByGroup(GROUP_D07, order, page, limit)
    }

  }
}
