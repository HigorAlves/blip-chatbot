import { Injectable } from '@nestjs/common'

import { fetchPublicRepositories } from '~/services/github'
import { Repository, RepositoryMinified } from '~/types/github'
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

  async getMostOldRepos(): Promise<RepositoryMinified[] | []> {
    const result = []
    const repos = await this.getReposWithLanguage()

    repos.sort(dateSort)
    const aux = repos.slice(0, 5)

    aux.forEach(item => {
      result.push({
        name: item.name,
        description: item.description,
        image: item.owner.avatar_url
      })
    })

    return result
  }
}
