import React from 'react';
import { Navigate } from 'react-router-dom';
import { store } from 'store';

interface IProps {
  children: React.ReactElement
}

export function WithLogin({ children }: IProps) {
  if (!store.reddit.token) {
    return <Navigate to='/login' />;
  }
  return children;
}
