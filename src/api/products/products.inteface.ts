import { Document } from 'mongoose'

export interface Products extends Document{
    name: string
}