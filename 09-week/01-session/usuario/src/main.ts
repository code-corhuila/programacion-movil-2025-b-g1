import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { writeFileSync } from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
    app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true, 
    }),
  );
    const config = new DocumentBuilder()
    .setTitle('API de Usuarios')
    .setDescription('Documentación de la API con NestJS + Prisma + JWT')
    .setVersion('1.0')
    .addBearerAuth(
    {
      type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        in: 'Header',
        description: 'Ingrese el Token JWT (Bearer <token>)',
    },
    'access-token',
  )
    .build();
    // 2. AÑADE ESTA OPCIÓN CLAVE
  const document = SwaggerModule.createDocument(app, config, {
      // 🚨 Habilita el análisis completo de los DTOs y metadatos
      extraModels: [], // Puedes dejarlo vacío o pasar un arreglo de DTOs
      deepScanRoutes: true, // Esto obliga a NestJS a escanear todo el árbol de rutas/módulos
  });
  SwaggerModule.setup('api/docs/usuarios', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
