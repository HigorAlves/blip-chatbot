import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import * as rateLimit from 'express-rate-limit'
import * as helmet from 'helmet'

import { AppModule } from '~/api/app.module'
import { PORT } from '~/constants'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)
  const packageVersion = process.env.npm_package_version

  const options = new DocumentBuilder()
    .setTitle('Blip Chatbot API')
    .setDescription('This is API Version')
    .setVersion(packageVersion)
    .build()
  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api', app, document)

  app.use(helmet())
  app.enableCors()
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100 // limit each IP to 100 requests per windowMs
    })
  )

  await app.listen(PORT)
  Logger.log(`🚀 Server running on ${await app.getUrl()}`, 'BOOTSTRAP')
}

bootstrap()
