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

  async deleteProduct(id : String) : Promise<Products> {
    return await this.productsModel.findByIdAndUpdate(id, { status : false}, function(err, res){
      return res
    })
  }

  async updateStock(id: String, quantity: Number): Promise<any> {
    const prod = await this.productsModel.findOne({_id:id})
    var stock = Number(prod.stock) + Number(quantity)
    return await this.productsModel.findByIdAndUpdate(id, {stock: stock})
    }
}
