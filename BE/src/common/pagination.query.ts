import { Type } from "class-transformer";
import { IsNumber, Min } from "class-validator";

import { IsOptional } from "class-validator";

export class PaginationQuery { 

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Type(()=>Number)
    page: number = 1;

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Type(()=>Number)
    limit: number = 10;
    

}
