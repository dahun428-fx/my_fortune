import apiClient from './axios'
import { getFortune as getFortuneRaw } from '@shared/lib/api/fortune'
import type { UserInfo } from '@shared/stores/useUserStore'

export function getFortune(data: UserInfo & { topic?: string; language: string }) {
  return getFortuneRaw(apiClient, data)
}
