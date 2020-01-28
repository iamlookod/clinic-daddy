/**
 * @author Amarit Jarasjindarat <amarit.jarasjindarat@gmail.com>
 */

import { NestFactory } from '@nestjs/core';
// import {
//   FastifyAdapter,
//   NestFastifyApplication,
// } from '@nestjs/platform-fastify';
import { Transport } from '@nestjs/common/enums/transport.enum';

import { AppModules } from './app.module';

async function bootstrap() {
  // create a microservices
  const microApp = await NestFactory.create(AppModules);
  microApp.connectMicroservice({
    transport: Transport.TCP,
    options: { retryAttempts: 5, retryDelay: 3001 },
  });

  await microApp.startAllMicroservicesAsync();
  await microApp.listen(3001);

  /**
   * Below code is REST APIs with fastify
   * Use when you need a top of microservices http request
   */
  // create a service
  // const app = await NestFactory.create<NestFastifyApplication>(
  //   AppModules, new FastifyAdapter({ logger: true }),
  // );

  // Enable CORS
  // app.enableCors();
  // await app.listen(5001);
}

bootstrap();
