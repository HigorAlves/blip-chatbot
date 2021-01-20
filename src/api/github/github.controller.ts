import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { GithubService } from './github.service'
import { RepositoryMinified, RepositoryMinifiedClass } from '~/types/github'

@ApiTags('cats')
@Controller('github')
export class GithubController {
  constructor(private service: GithubService) {}

  @Get()
  @ApiOperation({ summary: 'Get repositories data' })
  @ApiResponse({
    status: 200,
    description: 'The repositories',
    isArray: true,
    type: RepositoryMinifiedClass
  })
  getRepos(): Promise<RepositoryMinified[]> {
    return this.service.getMostOldRepos()
  }
}
