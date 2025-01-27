import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { IUser } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';

const saltNumber = 10;
@Injectable()
export class UserService {
    constructor(@InjectModel('User') private userModel: Model<IUser>){}

async createUser(user: IUser): Promise<IUser>{
    const hashedPassword = await bcrypt.hash(user.password, saltNumber);
    const newUser = new this.userModel({
        ...user,
        password: hashedPassword
    })
    return newUser.save();
}

async getUserByEmail(email: string): Promise <IUser | null>{
    return this.userModel.findOne({email});
}

async getUserById(userId: string): Promise<IUser | null>{
    return this.userModel.findById({userId});
}

async updateUser(userId: string, userData: Partial<IUser>): Promise<IUser | null>{
 
    return this.userModel.findByIdAndUpdate(userId, userData, { new: true});

}
async deleteUser(userId: string): Promise<IUser | null>{

    return this.userModel.findByIdAndDelete(userId);

}

}