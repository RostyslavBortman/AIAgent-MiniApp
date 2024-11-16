'use client';

import { PropsWithChildren } from 'react';

import Flex from '@/components/ui-kit/flex';

//main className="flex min-h-screen flex-col items-center justify-center p-24 gap-y-3"
export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Flex
        component="main"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        {children}
      </Flex>
    </>
  );
};
