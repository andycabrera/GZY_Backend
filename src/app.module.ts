import { Module } from '@nestjs/common';
import { ProductModule } from './api/products/products.module';
import { UsersModule } from './api/users/users.module';
import { PurchaseModule } from './api/purchase_order/purchase.module'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config'


@Module({
  imports: [ 
  ConfigModule.forRoot({
    isGlobal: true,
  }),
  ProductModule,
  UsersModule,
  PurchaseModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}