import { Controller, Get, Param } from '@nestjs/common';
import { ProviderService } from './provider.service';

@Controller('provider')
export class ProviderController {
    constructor(private providerService: ProviderService){}

    @Get()
    async getAllProviders(){
        return await this.providerService.allProvider()
    }

    @Get(':title')
    getOneProviderByTitle(@Param("title") title: string){
        return this.providerService.providerTitle(title)
    }
}
