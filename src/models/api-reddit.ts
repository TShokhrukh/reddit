import { KyInstance } from 'ky/distribution/types/ky';
import ky from 'ky';
import { REDDIT_API_URL } from 'constants/reddit';

interface ICreateFetchOptions {
  prefix?: string
}

export abstract class ApiReddit {
  protected prefixUrl: string;
  public token: string;
  abstract fetch: KyInstance;

  constructor (token: string) {
    this.prefixUrl = REDDIT_API_URL;
    this.token = token;
  }

  protected createFetch ({ prefix = '' }: ICreateFetchOptions): KyInstance {
    return ky.create({
      prefixUrl: this.prefixUrl + prefix,
      headers: {
        Authorization: `bearer ${this.token}`
      }
    });
  }
}
