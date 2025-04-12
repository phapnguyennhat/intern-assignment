import { BaseEntity } from "../../common/baseEntity";
import { Check, Column, Entity } from "typeorm";


export enum ForeignLanguageCode {
    ENGLISH = 'N1',
    RUSSIAN = 'N2',
    FRENCH = 'N3',
    CHINESE = 'N4',
    GERMAN = 'N5',
    JAPANESE = 'N6',
    KOREAN = 'N7',

 }

@Entity()
@Check(`ngoai_ngu >= 0 AND ngoai_ngu <= 10`)
@Check(`toan >= 0 AND toan <= 10`)
@Check(`ngu_van >= 0 AND ngu_van <= 10`)
@Check(`vat_li >= 0 AND vat_li <= 10`)
@Check(`hoa_hoc >= 0 AND hoa_hoc <= 10`)
@Check(`sinh_hoc >= 0 AND sinh_hoc <= 10`)
@Check(`lich_su >= 0 AND lich_su <= 10`)
@Check(`dia_li >= 0 AND dia_li <= 10`)
@Check(`gdcd >= 0 AND gdcd <= 10`)
export class ExamResult extends BaseEntity {
    
    @Column({unique: true})
    sbd: string;
  
    @Column('decimal', {precision: 4, scale: 2, nullable: true})
    toan: number;
  
    @Column('decimal', {precision: 4, scale: 2, nullable: true})
    ngu_van: number;
  
    @Column('decimal', {precision: 4, scale: 2, nullable: true})    
    ngoai_ngu: number;
  
    @Column('decimal', {precision: 4, scale: 2, nullable: true})
    vat_li: number;
  
    @Column('decimal', {precision: 4, scale: 2, nullable: true})
    hoa_hoc: number;
  
    @Column('decimal', {precision: 4, scale: 2, nullable: true})
    sinh_hoc: number;
  
    @Column('decimal', {precision: 4, scale: 2, nullable: true})
    lich_su: number;
  
    @Column('decimal', {precision: 4, scale: 2, nullable: true})
    dia_li: number;
  
    @Column('decimal', {precision: 4, scale: 2, nullable: true})
    gdcd: number;
  
    @Column({type: 'enum', enum: ForeignLanguageCode, nullable: true})
    ma_ngoai_ngu: string;
}