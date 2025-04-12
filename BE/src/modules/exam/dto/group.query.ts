import { PaginationQuery } from "src/common/pagination.query";
import { IsEnum, IsNotEmpty } from "class-validator";
import { EOrder } from "src/common/enum/order.enum";
export enum EGroupType {
    A = 'a',
    B = 'b',
    A01 = 'a01',
    D07 = 'd07',
}


export class GroupQuery extends PaginationQuery { 
  @IsEnum(EGroupType)
  @IsNotEmpty()
  groupType: EGroupType;

  @IsEnum(EOrder)
  @IsNotEmpty()
  order: EOrder;
}
