import { Document } from 'mongoose'


interface Product{
    idProd: String,
    quantity: Number
}

interface Address{
    address: String,
    city: String,
    postalCode: Number
}

export interface Purchase extends Document{
    products: Product[],
    idUser: String,
    price: Number,
    address: Address,
    status: String,
    dateCreate: Date,
    dateUpdate: Date
}
