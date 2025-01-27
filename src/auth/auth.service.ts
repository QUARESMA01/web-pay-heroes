import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { IUser } from 'src/user/interfaces/user.interface';
const JWT_SECRET = 'jwt-senac';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}

async login(email: string, password: string): Promise<string>{
    const user = await this.userService.getUserByEmail(email);

    if(!user){
        throw new Error('Usuário não existe');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if(!isPasswordValid){
        throw new Error('Senha inválida');
    }

    const payload = {userId: user._id, email: user.email};

    return jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'});
    

}

async validateUser(payload: any):Promise<IUser>{
    return this.userService.getUserById(payload.userId);
}
}
