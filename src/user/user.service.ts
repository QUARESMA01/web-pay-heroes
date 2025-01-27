import { Injectable } from '@nestjs/common';
import{ model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import * as jwt from'jsonwebtoken';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {}
