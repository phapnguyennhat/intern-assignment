import { BaseEntity } from "../../common/baseEntity";
import { Column, Entity } from "typeorm";


@Entity()
export class ExamResult extends BaseEntity {
    
    @Column({unique: true})
    sbd: string;
  
    @Column('float', {nullable: true})
    toan: number;
  
    @Column('float', {nullable: true})
    ngu_van: number;
  
    @Column('float', {nullable: true})    
    ngoai_ngu: number;
  
    @Column('float', {nullable: true})
    vat_li: number;
  
    @Column('float', {nullable: true})
    hoa_hoc: number;
  
    @Column('float', {nullable: true})
    sinh_hoc: number;
  
    @Column('float', {nullable: true})
    lich_su: number;
  
    @Column('float', {nullable: true})
    dia_li: number;
  
    @Column('float', {nullable: true})
    gdcd: number;
  
    @Column({nullable: true})
    ma_ngoai_ngu: string;
}