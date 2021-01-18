import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { GithubModule } from './github/github.module'

@Module({
  imports: [GithubModule],
  controllers: [AppController]
})
export class AppModule {}
