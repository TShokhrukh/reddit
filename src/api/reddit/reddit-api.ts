import { IApiReddit } from 'types';
import { RedditNew } from './reddit-new';

export class RedditApi {
  new: IApiReddit;

  constructor (token: string) {
    this.new = new RedditNew(token);
  }
}
