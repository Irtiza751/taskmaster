import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const allowedOrigins = [
  'http://localhost:5173',
  'https://taskmaster.com',
  'https://taskmaster.vercel.app',
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: allowedOrigins,
  });
  /**
   * Setting the global prefix api/endpoint
   */
  app.setGlobalPrefix('api');
  /**
   * Using the DTO pipe for request validation
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
