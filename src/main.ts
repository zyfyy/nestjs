import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log'],
  });
  const cs = app.get('ConfigService');
  const port = cs.get('port');
  await app.listen(port);
  console.log(`server listening: ${port}`);
}
bootstrap();
