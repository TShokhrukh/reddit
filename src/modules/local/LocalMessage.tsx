import React from 'react';
import { useMessage } from './hooks/useMessage';

interface IProps {
  code: string
  [K: string]: string
}

export function LocalMessage ({ code, ...others }: IProps) {
  const msg = useMessage(code, others);

  return <React.Fragment>{msg}</React.Fragment>;
}
