import React from 'react';

export function preventDefault<F extends (e: unknown) => void>(fn: F) {
  return (event: React.SyntheticEvent) => {
    event.preventDefault();
    fn(event); 
  };
}