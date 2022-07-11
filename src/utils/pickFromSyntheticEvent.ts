import React from 'react';
import R from 'ramda';

export function pickFromSyntheticEvent<H extends HTMLElement>() {
  return <K extends keyof H>(key: K) => 
    <F extends ( (k: H[K]) => void ) >(fn: F) => 
      (event: React.SyntheticEvent<H>) => 
        fn( 
          R.prop('currentTarget')(event)[key] 
        );
}