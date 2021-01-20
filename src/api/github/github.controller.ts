import { Controller, Get } from '@nestjs/common'

import { GithubService } from './github.service'
import { RepositoryMinified } from '~/types/github'

@Controller('github')
export class GithubController {
  constructor(private service: GithubService) {}

  @Get()
  getRepos(): Promise<RepositoryMinified[]> {
    return this.service.getMostOldRepos()
  }
}
