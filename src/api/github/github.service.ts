import { Injectable } from '@nestjs/common'

import { fetchPublicRepositories } from '~/services/github'
import { Repository } from '~/types/github'
import { dateSort } from '~/utils/dateSort'

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

  async getMostOldRepos(): Promise<Repository[] | []> {
    const repos = await this.getReposWithLanguage()

    repos.sort(dateSort)

    return repos.slice(0, 5)
  }
}
