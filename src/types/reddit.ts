import { Options } from 'ky';

export interface IApiReddit {
  token: string

  get (url: string, data?: Options): Promise<unknown>
  post (url: string, data?: Options): Promise<unknown>
  put (url: string, data?: Options): Promise<unknown>
  delete (url: string, data?: Options): Promise<unknown>
  patch (url: string, data?: Options): Promise<unknown>
}

export interface IReddit {
  new: IApiReddit
}
