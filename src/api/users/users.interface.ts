import {Document} from 'mongoose';

export interface Users extends Document{
    name: String,
    apellido: String,
    mail: String,
    password: String,
    dateCreate: Date,
    dateUpdate: Date
}