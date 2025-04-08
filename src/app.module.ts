import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExpensesModule } from './expenses/expenses.module';
import { TimeMiddleWare } from './middlewares/time.middleware';
import { AccessMiddleware } from './middlewares/access.middleware';

@Module({
  imports: [ExpensesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TimeMiddleWare,AccessMiddleware).forRoutes({path:"*", method :RequestMethod.ALL})
  }
}
