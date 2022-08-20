import React from 'react';

export function Loadable (Component: React.ComponentType) {
  return (props: object) => <Component {...props} />;
}
