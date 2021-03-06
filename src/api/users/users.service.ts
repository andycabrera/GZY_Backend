import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common/mongoose.decorators';
import { Model } from 'mongoose';
import { Users } from './users.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectModel('Users')
        private readonly usersModel: Model<Users>
    ){}

    async createUser(body: Users) : Promise<Users>{
        try {
           const user = await this.usersModel.create(body)
           return user
        } catch (error) {
            console.log(error)
            throw new BadRequestException(error)
        }
    }

    async getUser(id: string) : Promise<any>{
        console.log('hola')
        const user= await this.usersModel.findById(id)

        console.log(user)
        return user
    }

    async getUsers() : Promise<Users[]> {
        return await this.usersModel.find({})
    }

    async updateUser(body: Users, id: String) : Promise<Users> {
        return await this.usersModel.findByIdAndUpdate(id, body)
    }

    
}