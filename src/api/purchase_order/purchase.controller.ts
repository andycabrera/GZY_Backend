import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PurchaseService } from './purchase.service'

@Controller('/purchase')
export class PurchaseController{
    constructor(private readonly purchaseService: PurchaseService) {}

    @Post()
    async newPurchase(@Body() body): Promise<any>{
        return await this.purchaseService.createPurchase(body)
    }

    @Get()
    async getAll() : Promise<any> {
        return await this.purchaseService.getPurchases();
    }

    @Get('/:id')
    async getPurchase(@Param('id') id): Promise<any>{
        return await this.purchaseService.getPurchase(id)
    }
}