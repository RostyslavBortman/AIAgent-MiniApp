'use client';

import { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

import MiniKitProvider from '@/components/minikit-provider';
import { ThemeProvider } from '@/theme/ThemeProvider';
import DynamicContextProvider from '@/lib/dynamic/provider';
import { AgentHistoryContextProvider } from '@/contexts/AgentHistoryContext';

import { QueryClientProvider } from './api/query-client';

export default function Providers({ children }: PropsWithChildren) {
  const ErudaProvider = dynamic(() => import('../components/Eruda').then(c => c.ErudaProvider), {
    ssr: false,
  });

  return (
    <QueryClientProvider>
      <ErudaProvider>
        <MiniKitProvider>
          <DynamicContextProvider>
            <ThemeProvider>
              <CustomProviders>{children}</CustomProviders>
            </ThemeProvider>
          </DynamicContextProvider>
        </MiniKitProvider>
      </ErudaProvider>
    </QueryClientProvider>
  );
}

const CustomProviders = ({ children }: PropsWithChildren) => (
  <AgentHistoryContextProvider>{children}</AgentHistoryContextProvider>
);
