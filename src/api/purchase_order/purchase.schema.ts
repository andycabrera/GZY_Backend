import *as mongoose from 'mongoose'

export const PurchaseSchema = new mongoose.Schema({
    idProducts: [{idProd: Number}],
    quantityProducts: [{idProd: Number, quantity: Number}],
    idUser: Number,
    price: Number,
    address: {
        address: String,
        city: String,
        postalCode: Number
    },
    status: Boolean,
    dateCreate: Date,
    dateUpdate: Date
})