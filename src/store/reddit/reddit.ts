import { action, observable } from 'mobx';
import { IRedditStore } from 'types';

export class RedditStore implements IRedditStore {
  @observable public token: string;

  constructor () {
    this.token = '';
  }

  @action public setToken(token: string): void {
    this.token = token;
  }
}
