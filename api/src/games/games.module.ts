import { Module } from '@nestjs/common';
import { GamesController } from './games.controller';
import { GamesService } from './games.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Games, GamesSchema } from './game.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Games.name, schema: GamesSchema}])],
  controllers: [GamesController],
  providers: [GamesService]
})
export class GamesModule {}
