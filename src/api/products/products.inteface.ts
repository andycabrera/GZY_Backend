import { Document } from 'mongoose'

interface Options {
    color: String,
    size: String,
    base64: String
}

export interface Products extends Document{
    name: String,
    type: String,
    detail:String,
    options: Options[],
    price :Number,
    status: Boolean,
    dateCreate: Date,
    dateUpdate: Date
}