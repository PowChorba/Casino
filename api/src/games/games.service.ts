import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Games } from './game.schema';
import { Model } from 'mongoose';
import { GameFormat } from 'src/types';

@Injectable()
export class GamesService {
    constructor(@InjectModel(Games.name) private gamesModel: Model<Games>,) {}

    async getAllGames(){
        return await this.gamesModel.find();
    }

    async getGameByName(title: string){
        const game = await this.gamesModel.findOne({
            title
        })
        if(!game){
            return {msg: 'Game not found'}
        }
        return game
    }
    
    async getSome(page: string){
        const limit = 48
        const skip = (parseInt(page) - 1) * limit

        const allGames = await this.gamesModel.find().skip(skip).limit(limit).exec()
        // const games = allGames.map(e => e.proveeder)

        return allGames
    }
}
