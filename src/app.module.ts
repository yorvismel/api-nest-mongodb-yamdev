import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { DBURL } from './config.env';

@Module({
  imports: [MongooseModule.forRoot(DBURL), TodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
