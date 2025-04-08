import { isNotEmpty, IsNotEmpty, IsNumber, isNumber, IsString } from "class-validator"

export class CreateExpenseDto {

    @IsNotEmpty()
    @IsString()
    name:string

    @IsNotEmpty()
    @IsNumber()
    price:number
}
