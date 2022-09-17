
export interface IApiReddit {
  token: string

  get (url: string, data: object): Promise<unknown>
  post (url: string, data: object): Promise<unknown>
  put (url: string, data: object): Promise<unknown>
  delete (url: string, data: object): Promise<unknown>
  delete (url: string, data: object): Promise<unknown>
  patch (url: string, data: object): Promise<unknown>
}
