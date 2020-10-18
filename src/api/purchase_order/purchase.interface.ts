import { Document } from 'mongoose'

export interface Purchase extends Document{
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
}