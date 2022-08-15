import { IState } from './types/index';
import { createContext } from 'react';

export const LocalContext = createContext<IState>({
  lang: '',
  messages: {}
});
