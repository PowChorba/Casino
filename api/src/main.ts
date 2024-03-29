import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: [
      'Accept',
      'Accept-Version',
      'Content-Type',
      'Api-Version',
      'Origin',
      'X-Requested-With',
      'Authorization',
    ],
    origin: '*',
    // origin: ['http://localhost:3000', 'https://casino-production-3e95.up.railway.app', '*'],
  });
  await app.listen(process.env.PORT || 3001);
}
bootstrap();
