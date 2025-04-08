import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { ReadMiddleware } from 'src/middlewares/read.middleware';
import { CreateMiddleware } from 'src/middlewares/create.midlleware';
import { DeleteMiddleware } from 'src/middlewares/delete.middleware';
import { UpdateMiddleware } from 'src/middlewares/update.middleware';


@Module({
  controllers: [ExpensesController],
  providers: [ExpensesService],
})
export class ExpensesModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ReadMiddleware).forRoutes({
      path:"expenses",
      method:RequestMethod.GET
    });
    consumer.apply(CreateMiddleware).forRoutes({
      path:"expenses",
      method:RequestMethod.POST
    });
    consumer.apply(DeleteMiddleware).forRoutes({
      path:"expenses/:id",
      method:RequestMethod.DELETE
    });
    consumer.apply(UpdateMiddleware).forRoutes({
      path:"expenses/:id",
      method:RequestMethod.PATCH
    })
  }
}
