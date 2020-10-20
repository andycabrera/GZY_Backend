import {Document} from 'mongoose';

export interface Users extends Document{
    name: String,
    lastName: String,
    mail: String,
    password: String,
    dateCreate: Date,
    dateUpdate: Date
}