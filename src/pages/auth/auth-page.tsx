import React from 'react';
import { useURLToken } from 'hooks';
import { Navigate } from 'react-router-dom';
import { store } from 'store';

export function AuthPage() {
  const [token] = useURLToken();

  if (!token) {
    return (
      <div>
        loading...
      </div>
    );
  }

  store.reddit.setToken(token);
  return <Navigate to='/' />;
}
