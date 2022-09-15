import { RedditStore } from './reddit';
import { observable, makeObservable } from 'mobx';
import { IRedditStore } from 'types';

export class Store {
  @observable public reddit: IRedditStore;

  constructor () {
    this.reddit = new RedditStore();

    makeObservable(this);
  }
}

export const store = new Store();
