import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config';

async function bootstrap() {
  const { appName, port } = config;
  const app = await NestFactory.create(AppModule);
  await app.listen(port, () => {
    console.info(`${appName} is running in http://localhost:${port}`);
  });
}
bootstrap();
