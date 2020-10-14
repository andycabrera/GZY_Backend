import { Module } from '@nestjs/common';
import { DatabaseModule } from '../databases/database.module';
import { ProductController } from './products.controller';
import { productsProviders } from './products.provider';
import { ProductService } from './products.service';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductController],
  providers: [ProductService, ...productsProviders],
})
export class ProductModule {}
