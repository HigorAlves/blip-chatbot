import axios from 'axios'

import { Repository } from '~/types/github'

const api = axios.create({
  baseURL: 'https://api.github.com'
})

function repoURL(owner: string, repo: string): string {
  return `repos/${owner}/${repo}`
}

export async function fetchPublicRepositories(): Promise<Repository[]> {
  const TAKE_REPOS_URL = '/orgs/takenet/repos'

  try {
    const { data } = await api.get(TAKE_REPOS_URL)
    return data
  } catch (error) {
    throw new Error('Error while fetching public repositories')
  }
}

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
