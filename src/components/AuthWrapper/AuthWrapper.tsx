import React from 'react';
import { Center } from 'components/Center';
import { BorderWrapper } from 'components/BorderWrapper';

interface IProps {
  children: React.ReactNode
}

export function AuthWrapper ({ children }: IProps) {
  return (
    <Center>
      <BorderWrapper style={{ backgroundColor: '#fff' }}>
        {children}
      </BorderWrapper>
    </Center>
  );
}
