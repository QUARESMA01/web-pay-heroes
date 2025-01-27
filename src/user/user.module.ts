import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';

import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './models/Model';

@Module({
  controllers: [UserController],
  imports: [MongooseModule.forFeature([{name: 'User', schema: userSchema}])],
  providers: [UserService]
})
export class UserModule {}
