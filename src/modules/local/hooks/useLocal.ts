import { useContext } from 'react';
import { LocalContext } from '../context';

export function useLocal () {
  const local = useContext(LocalContext);

  return local;
}
