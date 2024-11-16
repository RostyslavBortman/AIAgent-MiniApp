'use client';

import { PropsWithChildren } from 'react';

import Flex from '@/components/ui-kit/flex';
import Navigation from '@/components/navigation';
import { NAVBAR_HEIGHT } from '@/constants/heights';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flex
      component="main"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      minHeight="100vh"
      px={4}
      pt={5}
      pb={`${NAVBAR_HEIGHT}px`}
    >
      {children}
      <Navigation />
    </Flex>
  );
};
