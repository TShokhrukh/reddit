import { KyInstance } from 'ky/distribution/types/ky';
import { ApiReddit } from 'models/api-reddit';

export class RedditNew extends ApiReddit {
  protected fetch: KyInstance;
  constructor (token: string) {
    super(token);
    this.fetch = this.createFetch({ prefix: '' });
  }

  get () {
    return super.get('/new');
  }
}