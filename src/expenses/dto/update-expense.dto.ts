import { PartialType } from '@nestjs/mapped-types';
import { CreateExpenseDto } from './create-expense.dto';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class UpdateExpenseDto extends PartialType(CreateExpenseDto) {
     @IsNotEmpty()
        @IsString()
        name:string
    
        @IsNotEmpty()
        @IsNumber()
        price:number
}
