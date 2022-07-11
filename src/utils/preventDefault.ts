/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export function preventDefault<F extends (e: any) => void>(fn: F) {
  return (event: React.SyntheticEvent<any>) => {
    event.preventDefault();
    fn(event); 
  };
}