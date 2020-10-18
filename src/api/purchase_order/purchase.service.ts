import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { Purchase } from './purchase.interface'

@Injectable()
export class PurchaseService{
    constructor(
        @InjectModel('Purchase')
        private readonly userModel: Model<Purchase>
    ){}

    async createPurchase(body): Promise<Purchase>{
        return await this.userModel.create(body)
    }

    async getPurchase(id): Promise<String>{
        return await "Hola"
        // return await this.userModel.find({_id: id})
    }
}