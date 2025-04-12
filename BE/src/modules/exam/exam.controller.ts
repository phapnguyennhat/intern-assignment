import { Controller, Get, Param, Query } from '@nestjs/common';
import { ExamService } from './exam.service';
import { CheckScoreQuery } from './dto/checkScore.query';
import { EGroupType, GroupQuery } from './dto/group.query';
import { GROUP_A1, GROUP_B, GROUP_D07, GROUP_A } from 'src/common/constant';
import { ScoreReportQuery } from './dto/scoreReport.query';
@Controller('exam')
export class ExamController {
  constructor(private readonly examService: ExamService) { }
  
  @Get('student')
  async checkScore(@Query() {sbd}: CheckScoreQuery) { 
    return this.examService.checkScore(sbd)
  }

  @Get('score-report')
  async getScoreReport(@Query() { subject }: ScoreReportQuery) {
    return this.examService.getScoreReport(subject)
  } 

  @Get('group')
  async getStudentByGroup(@Query() { groupType, order, page, limit }: GroupQuery) {
    
    if (groupType === EGroupType.A) { 
      return this.examService.getStudentByGroup(GROUP_A, order, page, limit)
    }
    else if (groupType === EGroupType.A1) { 
      return this.examService.getStudentByGroup(GROUP_A1, order, page, limit)
    }
    else if (groupType === EGroupType.B) { 
      return this.examService.getStudentByGroup(GROUP_B, order, page, limit)
    }
    else if (groupType === EGroupType.D07) { 
      return this.examService.getStudentByGroup(GROUP_D07, order, page, limit)
    }
    
  }
}
