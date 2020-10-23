import { Document } from 'mongoose'

export interface Products extends Document{
    name: String,
    type: String,
    detail:String,
    opciones: [
      {
        color: String,
        talle: String,
        base64: String
      }
    ]
}