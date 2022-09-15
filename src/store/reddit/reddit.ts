import { action, observable, makeObservable, computed } from 'mobx';
import { IRedditStore } from 'types';

export class RedditStore implements IRedditStore {
  @observable public token: string;
  @observable public date: number;
  @observable public limit: number;

  constructor () {
    this.token = '';
    this.limit = 0;
    this.date = 0;

    makeObservable(this);
  }

  @computed get isValid (): boolean {
    return Date.now() - this.date < this.limit;
  }

  @action public setToken(token: string): void {
    this.date = Date.now();
    this.token = token;
  }
}
