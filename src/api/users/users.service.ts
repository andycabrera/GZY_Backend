import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { Users } from './users.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('Users')
        private readonly usersModel: Model<Users>
    ){}

    async createUser(body) : Promise<Users>{
        return await this.usersModel.create(body)
    }

    async getUser(id) : Promise<String>{
        return await "Hola"
        // return await this.usersModel.find({_id: id});
    }

    
}