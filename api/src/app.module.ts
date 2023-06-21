import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { GamesModule } from './games/games.module';
import { ProviderModule } from './provider/provider.module';
config()
@Module({
  imports: [MongooseModule.forRootAsync({
    useFactory: () => ({
      uri: process.env.MONGODB
    })
  }), GamesModule, ProviderModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
