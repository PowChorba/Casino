import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Games } from './game.schema';
import { Model } from 'mongoose';

@Injectable()
export class GamesService {
    constructor(@InjectModel(Games.name) private gamesModel: Model<Games>,) {}

    async getAllGames(){
        return await this.gamesModel.find();
    }

    async getGameByName(title: string){
        const game = await this.gamesModel.find({
            $where: title
        })
        if(!game){
            return {msg: 'Game not found'}
        }
        return game
    }
}
