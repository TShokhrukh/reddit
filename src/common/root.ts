import { NODE_ENV } from 'constants/env';

export function isDev() {
  return NODE_ENV === 'development';
}