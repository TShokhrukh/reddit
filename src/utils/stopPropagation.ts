/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

export function stopPropagation<F extends (e: any) => void>(fn: F) {
  return (event: React.SyntheticEvent<any>) => {
    event.stopPropagation();
    fn(event); 
  };
}