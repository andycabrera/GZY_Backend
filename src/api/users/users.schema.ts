import * as mongoose from 'mongoose';

const validateEmail = function(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'El nombre es obligatorio']
    },
    lastName: String,
    mail: {
        type: String, 
        trim: true,
        required: [true, 'El email es obligatorio'],
        lowercase: true,
        unique:true,
        validate: [validateEmail, 'Por favor, ingrese un email valido'],
        match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/]
    },
    password: {
        type: String,
        required: [true, 'El password es obligatorio']
    },
    dateCreate: {
        type: Date,
        default: new Date()
    },
    dateUpdate: {
        type: Date,
        default: null
    }
 })

