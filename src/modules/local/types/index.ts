
export interface IMessages {
  [K: string]: string
}

export interface IState {
  lang: string
  messages: IMessages
}