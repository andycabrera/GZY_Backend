import { Module } from '@nestjs/common';
import { ProductModule } from './api/products/products.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'


@Module({
  imports: [ 
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}