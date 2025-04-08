import { BadGatewayException, Injectable } from '@nestjs/common';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';

@Injectable()
export class ExpensesService {

  private expenses = [
    {
      id:1,
      name:"sport",
      price:300
    },
    {
      id:2,
      name:"shopping",
      price:100
    }
  ]

  create(createExpenseDto: CreateExpenseDto) {
    const lastID = this.expenses[this.expenses.length - 1]?.id || 0
    const newObj = {
      id:lastID + 1,
      name:createExpenseDto.name,
      price:createExpenseDto.price
    }

    this.expenses.push(newObj)
    return newObj
  }

  findAll() {
    return this.expenses
  }

  findOne(id: number) {
    const expense = this.expenses.find(el => el.id === id)
    if(!expense) throw new BadGatewayException
    return expense
  }

  update(id: number, updateExpenseDto: UpdateExpenseDto) {
    const index = this.expenses.findIndex(el => el.id === id)
    if(index === -1) throw new BadGatewayException
    
     this.expenses[index] = {
      ...this.expenses[index],
      ...updateExpenseDto
    }
    return this.expenses[index]
  }

  remove(id: number) {
    const expense = this.expenses.findIndex(el => el.id === id)
    if(expense === - 1) throw new BadGatewayException
    const deletedItme = this.expenses.splice(expense,1)
    return deletedItme
  }
}
