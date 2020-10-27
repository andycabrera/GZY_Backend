import { Module } from '@nestjs/common'
import { DatabaseModule } from '../databases/database.module'
import { PurchaseController } from './purchase.controller'
import { PurchaseService } from './purchase.service'
import { purchaseProvider } from './purchase.provider'
import { ProductService } from '../products/products.service'
import { ProductModule } from '../products/products.module'



@Module({
    imports: [DatabaseModule, ProductModule, ProductService],
    controllers: [PurchaseController], 
    providers: [PurchaseService, ...purchaseProvider],
})
export class PurchaseModule {}