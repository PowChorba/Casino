import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Provider } from './provider.schema';

@Injectable()
export class ProviderService {
    constructor(@InjectModel(Provider.name) private providerModel: Model<Provider>){}

    async allProvider(){
        return await this.providerModel.find();
    }
    
}
