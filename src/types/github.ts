/* eslint-disable camelcase */

export type Owner = {
  avatar_url: string
  login: string
}

export type Repository = {
  id: string
  html_url: string
  name: string
  stargazers_count: string
  forks: string
  description: string
  homepage: string
  open_issues_count: number
  languages_url: string
  owner: Owner
}
