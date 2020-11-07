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
        street: String,
        number: String,
        departament: String,
        floor: String,
        city: String,
        postalCode: String
    },
    status: {
        type: String,
        enum: ["PENDIENTE","FINALIZADO"],
        default: "PENDIENTE"
    },
    dateCreate: {
        type: Date,
        default: new Date()
    },
    dateUpdate: {
        type: Date,
        default: null
    }
})