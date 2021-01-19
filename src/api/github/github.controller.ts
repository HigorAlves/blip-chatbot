import { Controller, Get } from '@nestjs/common'

import { GithubService } from './github.service'
import { Repository } from '~/types/github'

@Controller('github')
export class GithubController {
  constructor(private service: GithubService) {}

  @Get()
  getRepos(): Promise<Repository[]> {
    return this.service.getMostOldRepos()
  }
}
