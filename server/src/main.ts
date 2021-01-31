import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import morgan from 'morgan';
import hpp from 'hpp';
import { ValidationPipe } from '@nestjs/common';

const PROD = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  if (PROD) {
    app.use(helmet());
    app.use(hpp());
  } else {
    app.use(morgan('dev'));
  }
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(PORT);
}
bootstrap();
