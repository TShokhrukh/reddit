import { action, computed, observable, makeObservable } from 'mobx';

export abstract class FetchStore<D> {
  @observable abstract data: D;
  @observable public date: number;
  @observable public state: 'done'|'loading'|'error'|'not';
  
  constructor () {
    this.date = 0;
    this.state = 'not';

    makeObservable(this);
  }

  @computed public get isLoading () {
    return this.state === 'loading';
  }

  @computed public get isDone () {
    return this.state === 'done';
  }

  @computed public get isError () {
    return this.state === 'error';
  }

  @computed public get isFetched () {
    return this.state === 'not';
  }

  @action public setData (data: D) {
    this.data = data;
    this.date = Date.now();
  }
}
