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

  async createProduct(body: Products): Promise<Products> {
    return await this.productsModel.create(body)
  }

  async getProduct(id): Promise<Products> {
    return await this.productsModel.findById(id)
  }

  async getProducts(): Promise<Products[]> {
    return await this.productsModel.find({});
  }

  async updateProduct(body: Products): Promise<Products>{
    return await this.productsModel.findByIdAndUpdate(body.id, body);
  }
}
