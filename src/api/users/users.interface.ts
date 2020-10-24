import {Document} from 'mongoose';

export interface Users extends Document{
    name: String,
    lastName: String,
    mail: String,
    password: String,
    status: Boolean,
    dateCreate: Date,
    dateUpdate: Date
}

export var changeStatus = function(){
    if(status){
        this.status = false
    }else{
        this.status = true
    }
}