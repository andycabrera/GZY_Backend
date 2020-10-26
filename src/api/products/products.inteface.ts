import { Document } from 'mongoose'

export interface Products extends Document{
    name: String,
    type: String,
    detail:String,
    color: String,
    size: String,
    base64: String
    price :Number,
    stock: Number,
    status: Boolean,
    dateCreate: Date,
    dateUpdate: Date
}