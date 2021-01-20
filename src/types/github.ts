/* eslint-disable camelcase */

import { ApiProperty } from '@nestjs/swagger'

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
  language: string
  created_at: Date
}

export type RepositoryMinified = {
  name: string
  description: string
  image: string
}

export class RepositoryMinifiedClass {
  @ApiProperty()
  name: string

  @ApiProperty()
  description: string

  @ApiProperty()
  image: string
}
