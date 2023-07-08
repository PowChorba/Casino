import { Module } from '@nestjs/common';
import { ProviderController } from './provider.controller';
import { ProviderService } from './provider.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Provider, ProviderSchema } from './provider.schema';
import { GamesSchema, Games } from 'src/games/game.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Provider.name, schema: ProviderSchema}, {name: Games.name, schema: GamesSchema}])],
  controllers: [ProviderController],
  providers: [ProviderService]
})
export class ProviderModule {}
