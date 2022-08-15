import { useContext, useEffect, useState } from 'react';
import { template } from 'utils/template';
import { LocalContext } from '../context';
import { IMessages } from './../types/index';

export function useMessage (code: string, replace?: IMessages) {
  const [msg, setMsg] = useState<string>('');
  const { messages } = useContext(LocalContext);
  
  useEffect(() => {
    setMsg(template(messages[code] ?? code, replace ?? {}));
  }, [code, replace, messages]);

  return msg;
}
