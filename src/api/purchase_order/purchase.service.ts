import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators'
import { Model } from 'mongoose'
import { Purchase } from './purchase.interface'
import  states  from '../helpers/states'

@Injectable()
export class PurchaseService{
    constructor(
        
        @InjectModel('Purchase')
        private readonly purchaseModel: Model<Purchase>
    ){}

    async createPurchase(body: Purchase): Promise<Purchase>{
        //Descontar Stock de un producto
        return await this.purchaseModel.create(body)
    }

    async getPurchases(): Promise<Purchase[]>{
        return await this.purchaseModel.find({}).populate('idUser').populate('products.product')
    }

    async getPurchase(id: String): Promise<any>{
        return await this.purchaseModel.find({_id: id}).populate('users').lean()
    }

    async changeStatus(id: String, next: Boolean): Promise<any>{
        const order = await this.purchaseModel.findOne(id).populate('users').lean()
        if(next){
            order.status = states.find(x => x.name == order.status).next
        }else{
            order.status = states.find(x => x.name == order.status).previus
        }
    }
}