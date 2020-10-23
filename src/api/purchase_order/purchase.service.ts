import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { Purchase } from './purchase.interface'

@Injectable()
export class PurchaseService{
    constructor(
        @InjectModel('Purchase')
        private readonly purchaseModel: Model<Purchase>
    ){}

    async createPurchase(body): Promise<Purchase>{
        return await this.purchaseModel.create(body)
    }

    async getPurchases(): Promise<Purchase[]>{
        return await this.purchaseModel.find({}).populate('idUser').populate('products.product')
    }

    async getPurchase(id): Promise<any>{
        return await this.purchaseModel.find({_id: id}).populate('users')
    }
}