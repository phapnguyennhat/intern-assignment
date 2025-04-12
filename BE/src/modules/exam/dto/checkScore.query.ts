import { IsNotEmpty, IsString } from "class-validator";

export class CheckScoreQuery {
    @IsNotEmpty()
    @IsString()
    sbd: string;
}
