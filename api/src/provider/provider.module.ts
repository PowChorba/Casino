import { Module } from '@nestjs/common';
import { ProviderController } from './provider.controller';
import { ProviderService } from './provider.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Provider, ProviderSchema } from './provider.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: Provider.name, schema: ProviderSchema}])],
  controllers: [ProviderController],
  providers: [ProviderService]
})
export class ProviderModule {}
