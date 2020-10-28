import * as mongoose from 'mongoose'

export const ProductsSchema = new mongoose.Schema({
  name: String,
  type: String,
  detail:String,
  color: String,
  size: String,
  base64: String,
  price: Number,
  status: {
    type: Boolean,
    default: true
  },
  stock: Number,
  dateCreate: {
    type: Date,
    default: new Date()
  },
  dateUpdate: {
      type: Date,
      default: null
  }
})