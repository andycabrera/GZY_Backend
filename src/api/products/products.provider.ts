import { Connection } from 'mongoose'
import { ProductsSchema } from './products.schema'

export const productsProviders = [
  {
    provide: 'ProductsModel',
    useFactory: (connection: Connection) => connection.model('Products', ProductsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
]
