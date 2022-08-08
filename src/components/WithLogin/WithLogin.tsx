import React from 'react';
import { Navigate } from 'react-router-dom';

interface IProps {
  children: React.ReactElement
}

export function WithLogin({ children }: IProps) {
  // eslint-disable-next-line no-constant-condition
  if (true) {
    return <Navigate to='/login' />;
  }
  return children;
}
