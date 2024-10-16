import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HxRequestMiddleware } from './hx-middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(HxRequestMiddleware)
      .forRoutes(AppController); 
  }
}
