import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export enum ESubject {
    TOAN = 'toan',
    NGU_VAN = 'ngu_van',
    NGOAI_NGU = 'ngoai_ngu',
    VAT_LI = 'vat_li',
    HOA_HOC = 'hoa_hoc',
    SINH_HOC = 'sinh_hoc',
    LICH_SU = 'lich_su',
    DIA_LI = 'dia_li',
    GDCD = 'gdcd',
 }

export enum EScoreLevel {
    EXCELLENT = 'excellent',  // [8.0 - 10] 
    GOOD = 'good',            // [6.0 - 8)
    AVERAGE = 'average',      // [4.0 - 6)
    WEAK = 'weak',            //  [0 - 4.0)
 
}

export class ScoreReportQuery {

    @IsEnum(ESubject)
    @IsNotEmpty()
    subject: ESubject;

 
}

