import *as mongoose from 'mongoose'

export const PurchaseSchema = new mongoose.Schema({
    products: [
        {
            product: 
            {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Products'
            },
            quantity: Number
        }
    ],
    idUser: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users'
    },
    price: Number,
    address: {
        address: String,
        city: String,
        postalCode: Number
    },
    status: Boolean,
    dateCreate: {
        type: Date,
        default: new Date()
    },
    dateUpdate: {
        type: Date,
        default: null
    }
})