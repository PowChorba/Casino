import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Provider } from './provider.schema';
import { Games } from 'src/games/game.schema';

@Injectable()
export class ProviderService {
    constructor(@InjectModel(Provider.name) private providerModel: Model<Provider>, @InjectModel(Games.name) private gamesModel: Model<Games>){}

    async allProvider(){
        // const allGames = await this.gamesModel.find()
        // let allProvider = await this.providerModel.find();
        // for(let i = 0; i < allGames.length - 1; i ++){
        //     const games = allGames.filter(e => e.proveedor.includes(allProvider[i]?.name))
        //     console.log(games.length)
        //     allProvider[i].gamesLength = games?.length
        //     allProvider[i]?.save()
        //     // console.log(allGames[i].proveedor)
        // }
        // return allProvider;
        return await this.providerModel.find();
    }
    
}
