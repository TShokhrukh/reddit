
export interface IRedditStore {
  token: string
  date: number
  limit: number
  get isValid(): boolean
  setToken(token: string): void
}
