import { Module } from '@nestjs/common'
import { DatabaseModule } from '../databases/database.module'
import { PurchaseController } from './purchase.controller'
import { PurchaseService } from './purchase.service'
import { purchaseProvider } from './purchase.provider'



@Module({
    imports: [DatabaseModule],
    controllers: [PurchaseController], 
    providers: [PurchaseService, ...purchaseProvider],
})
export class PurchaseModule {}