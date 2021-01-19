import { Repository } from '~/types/github'

export function dateSort(dateOne: Repository, dateTwo: Repository) {
  if (dateOne.created_at > dateTwo.created_at) return -1
  if (dateOne.created_at < dateTwo.created_at) return 1
  return 0
}
