import { Module } from '@nestjs/common'
import { DatabaseModule } from '../databases/database.module'
import { productsProviders } from '../products/products.provider'
import { ProductService } from '../products/products.service'
import { PurchaseController } from './purchase.controller'
import { purchaseProvider } from './purchase.provider'
import { PurchaseService } from './purchase.service'



@Module({
    imports: [DatabaseModule],
    controllers: [PurchaseController], 
    providers: [PurchaseService, ProductService, ...purchaseProvider, ...productsProviders],
})
export class PurchaseModule {}