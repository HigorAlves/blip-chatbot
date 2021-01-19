import { Test, TestingModule } from '@nestjs/testing'

import { GithubService } from './github.service'

describe('GithubService', () => {
  let service: GithubService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GithubService]
    }).compile()

    service = module.get<GithubService>(GithubService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should list repositories with C# as language', async () => {
    const repoList = await service.getReposWithLanguage('C#')
    expect(repoList[0].language).toEqual('C#')
  })

  it('should get only 5 repos', async () => {
    const repoList = await service.getMostOldRepos()
    expect(repoList).toHaveLength(5)
  })
})
