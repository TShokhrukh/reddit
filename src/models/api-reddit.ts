import { KyInstance } from 'ky/distribution/types/ky';
import ky, { Options } from 'ky';
import { REDDIT_API_URL } from 'constants/reddit';
import { IApiReddit } from 'types';

interface ICreateFetchOptions {
  prefix?: string
}

export abstract class ApiReddit implements IApiReddit {
  static REDDIT_API_URL: string = REDDIT_API_URL;

  public token: string;
  protected abstract fetch: KyInstance;

  constructor (token: string) {
    this.token = token;
  }

  public get (url: string, data?: Options) {
    return this.fetch.get(url, data).json();
  }

  public post (url: string, data?: Options) {
    return this.fetch.post(url, data).json();
  }

  public put (url: string, data?: Options) {
    return this.fetch.put(url, data).json();
  }

  public delete (url: string, data?: Options) {
    return this.fetch.delete(url, data).json();
  }

  public patch (url: string, data?: Options) {
    return this.fetch.patch(url, data).json();
  }

  protected createFetch ({ prefix = '' }: ICreateFetchOptions): KyInstance {
    return ky.create({
      prefixUrl: ApiReddit.REDDIT_API_URL + prefix,
      headers: {
        Authorization: `bearer ${this.token}`
      }
    });
  }
}
