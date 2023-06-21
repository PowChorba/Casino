import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersFormat } from 'src/types';

@Controller('users')
export class UsersController {
    constructor(private userController: UsersService){}

    @Post()
    users(@Body() data: UsersFormat){
        return this.userController.user(data)
    }
}
