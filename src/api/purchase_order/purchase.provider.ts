import { Connection } from 'mongoose'
import { PurchaseSchema } from './purchase.schema'

export const purchaseProvider = [
    {
        provide: 'PurchaseModel',
        useFactory: (connection: Connection) => connection.model('Purchase', PurchaseSchema),
        inject: ['DATABASE_CONNECTION'],
    },
]
