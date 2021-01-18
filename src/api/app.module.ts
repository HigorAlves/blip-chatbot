import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { APP_GUARD } from '@nestjs/core'
import { MongooseModule } from '@nestjs/mongoose'

import { AppController } from './app.controller'
import { RolesGuard } from './auth/guards/roles.guard'
import { AuthModule } from '~/api/auth/auth.module'
import { UserModule } from '~/api/user/user.module'
import ENV_CONFIG from '~/config/configuration'
import { MONGO_DB_CONFIG } from '~/config/mongoose.config'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.development.env', '.production.env', '.env'],
      load: [ENV_CONFIG],
      isGlobal: true
    }),
    MongooseModule.forRoot(MONGO_DB_CONFIG.url, {
      useNewUrlParser: true,
      useCreateIndex: true
    }),
    AuthModule,
    UserModule
  ],
  controllers: [AppController]
})
export class AppModule {}
