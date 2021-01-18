import axios from 'axios'

import { Repository } from '~/types/github'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

function repoURL(owner: string, repo: string): string {
  return `/repos/${owner}/${repo}`
}

/**
 * Function that will return a promise with a list of Repositories.
 */

export async function fetchPublicRepositories(): Promise<Repository[]> {
  const TAKE_REPOS_URL = '/orgs/takenet/repos'

  try {
    const { data } = await api.get(TAKE_REPOS_URL)
    return data
  } catch (error) {
    throw new Error('Error while fetching public repositories')
  }
}
/**
 * Will return a promise with the given repository data;
 * @param owner the owner of the repository
 * @param repo repository name
 */

export async function fetchRepo(
  owner: string,
  repo: string
): Promise<Repository> {
  try {
    const { data } = await api.get(repoURL(owner, repo))
    return data
  } catch (error) {
    throw new Error('Error while fetching public repository')
  }
}
