import { Injectable } from '@nestjs/common'

import { fetchPublicRepositories, fetchRepo } from '~/services/github'
import { Repository } from '~/types/github'

@Injectable()
export class GithubService {
  async getReposWithLanguage(language = 'C#'): Promise<Repository[] | []> {
    const onlyWithLanguage = []
    const repos = await fetchPublicRepositories()

    for (const repo of repos) {
      if (repo.language == language) {
        onlyWithLanguage.push(repo)
      }
    }

    return onlyWithLanguage
  }

  dateSort(dateOne: Repository, dateTwo: Repository) {
    if (dateOne.created_at > dateTwo.created_at) return -1
    if (dateOne.created_at < dateTwo.created_at) return 1
    return 0
  }

  // TODO: pegar os 5 repos mais antigos na linguagem C# e ordernar de forma crescente por data de criação.
  async getMostOldRepos(): Promise<Repository[] | []> {
    const repos = await this.getReposWithLanguage()

    console.log('BEFORE', repos[0])
    repos.sort(this.dateSort)
    console.log('AFTER', repos[0])

    return repos.slice(0, 5)
  }
}
