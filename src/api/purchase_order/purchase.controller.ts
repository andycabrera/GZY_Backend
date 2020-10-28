import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from '../products/products.service';
import { PurchaseService } from './purchase.service';

@Controller('/purchase')
export class PurchaseController{
    constructor(private readonly purchaseService: PurchaseService,
        private readonly productService: ProductService ) {}

    @Post()
    async newPurchase(@Body() body): Promise<any>{
        body.products.forEach(element => {
            this.productService.updateStock(element.product, (Number(-element.quantity)))
        });
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