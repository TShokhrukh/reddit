import React, { useEffect, useState } from 'react';
import { LocalContext } from './context';

interface IProps {
  lang: string,
  messages: {
    [K: string]: string
  },
  children: React.ReactNode
}

export function LocalProvider ({ children, lang, messages }: IProps) {
  const [state, setState] = useState({ lang: '', messages: {} });

  useEffect(() => {
    setState({
      lang,
      messages
    });
  }, [lang, messages]);

  return (
    <LocalContext.Provider value={state}>
      {children}
    </LocalContext.Provider>
  );
}
