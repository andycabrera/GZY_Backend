import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {

  async createProduct(body): Promise<string> {
    // TODO: guardar en la base de mongo
    return 'Hello World!';
  }

  async getProduct(id): Promise<string> {
    // TODO: buscar por id en la base
    return 'Hello World!';
  }
}
