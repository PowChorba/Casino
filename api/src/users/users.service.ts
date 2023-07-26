import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Users } from './users.schema';
import { UsersFormat } from 'src/types';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  async user(data: UsersFormat) {
    const findUser = await this.usersModel.find({
      email: data.email,
    });
    if (findUser.length === 0 && data.nickname) {
      const findNick = await this.usersModel.findOne({
        nickname: data.nickname,
      });
      if (findNick) {
        return 'Nickname already on use';
      } else {
        const newUser = new this.usersModel({
          email: data.email,
          password: data.password,
          nickname: data.nickname,
        });
        return newUser.save();
      }
    } else if (findUser.length === 0) {
      return { msg: false };
    } else if (findUser[0].password !== data.password) {
      return { msg: false };
    }
    return { msg: true, findUser };
  }
}
