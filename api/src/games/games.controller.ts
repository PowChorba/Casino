import { Controller, Get, Param } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    constructor(private gamesService:GamesService) {}

    @Get()
    async getAll(){
        return this.gamesService.getAllGames()
    }

    @Get('/:page')
    getGames(@Param('page') page: string){
        return this.gamesService.getSome(page)
    }

    @Get('/title/:id')
    getGameById(@Param('id') title: string){
        return this.gamesService.getGameByName(title)
    }

}
