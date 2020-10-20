import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { Products } from './products.inteface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Products')
    private readonly productsModel: Model<Products>
  ) {}

  async createProduct(body): Promise<Products> {
    
    return await this.productsModel.create(body)
  }

  async getProduct(id): Promise<any> {
    // TODO: buscar por id en la base
    return await this.productsModel.findById(id)
  }
}
