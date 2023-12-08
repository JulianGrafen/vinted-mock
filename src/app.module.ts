import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ListingsController } from './listing.controller';
import { ListingsModule } from './listing.module';





@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/vinted'), ListingsModule],
  controllers: [AppController,ListingsController],
  providers: [AppService],
})
export class AppModule {}
