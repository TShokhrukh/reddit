import React from 'react';
import { useURLToken } from 'hooks';
import { Navigate } from 'react-router-dom';

export function AuthPage() {
  const [token] = useURLToken();

  if (token) {
    return <Navigate to='/' />;
  }

  return (
    <div>
      loading...
    </div>
  );
}
