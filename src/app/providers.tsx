'use client';

import { PropsWithChildren } from 'react';

import MiniKitProvider from '@/components/minikit-provider';
import { ThemeProvider } from '@/theme/ThemeProvider';
import DynamicContextProvider from '@/lib/dynamic/provider';
import { AgentHistoryContextProvider } from '@/contexts/AgentHistoryContext';

import { QueryClientProvider } from './api/query-client';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider>
      <MiniKitProvider>
        <DynamicContextProvider>
          <ThemeProvider>
            <CustomProviders>{children}</CustomProviders>
          </ThemeProvider>
        </DynamicContextProvider>
      </MiniKitProvider>
    </QueryClientProvider>
  );
}

const CustomProviders = ({ children }: PropsWithChildren) => (
  <AgentHistoryContextProvider>{children}</AgentHistoryContextProvider>
);
