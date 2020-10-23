import * as mongoose from 'mongoose'

export const ProductsSchema = new mongoose.Schema({
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
})