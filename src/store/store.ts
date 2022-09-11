import { RedditStore } from './reddit';
import { observable } from 'mobx';
import { IRedditStore } from 'types';

export class Store {
  @observable public reddit: IRedditStore;

  constructor () {
    this.reddit = new RedditStore();
  }
}

export const store = new Store();
