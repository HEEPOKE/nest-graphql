import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import config from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.setGlobalPrefix('apis');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(config.PORT);
  console.log(`running on: ${await app.getUrl()}`);
}
bootstrap();
