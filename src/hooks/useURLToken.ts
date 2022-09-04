import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export function useURLToken() {
  const [token, setToken] = useState('');
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');

  if (code) {
    setToken(code);
  }

  return [token];
}
