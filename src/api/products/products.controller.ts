import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Products } from './products.inteface';
import { ProductService } from './products.service';

@Controller('/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async newProduct(@Body() body ): Promise<any> {
    return await this.productService.createProduct(body);
  }

  @Get('/:id')
  async getProduct(@Param('id') id): Promise<any> {
    return await this.productService.getProduct(id);
  }

  @Get()
  async getProducts(): Promise<any> {
    return await this.productService.getProducts();
  }

  @Put()
  async updateProducts(@Body() body ): Promise<any> {
    return await this.productService.updateProduct(body)
  }

  @Delete('/:id')
  async deleteProduct(@Param('id') id ): Promise<Products> {
    return await this.productService.deleteProduct(id)
  }

  @Put('/:id/updateStock/:quantity')
  async updateStock(@Param('id') id, @Param('quantity') quantity) : Promise<any> {
    return this.productService.updateStock(id, quantity)
  }

}
