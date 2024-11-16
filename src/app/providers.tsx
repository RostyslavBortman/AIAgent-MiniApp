'use client';

import { PropsWithChildren } from 'react';
import dynamic from 'next/dynamic';

import MiniKitProvider from '@/components/minikit-provider';
import NextAuthProvider from '@/components/next-auth-provider';
import { Layout } from '@/layout';
import { ThemeProvider } from '@/theme/ThemeProvider';
import DynamicContextProvider from '@/lib/dynamic/provider';

import { QueryClientProvider } from './api/query-client';

export default function Providers({ children }: PropsWithChildren) {
  const ErudaProvider = dynamic(() => import('../components/Eruda').then(c => c.ErudaProvider), {
    ssr: false,
  });

  const DYNAMIC_ENVIRONMENT_ID = process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID as string;
  console.log(DYNAMIC_ENVIRONMENT_ID);
  console.log(process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID, 'NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID');

  return (
    <NextAuthProvider>
      <ErudaProvider>
        <MiniKitProvider>
          <DynamicContextProvider>
            <QueryClientProvider>
              <ThemeProvider>
                <Layout>{children}</Layout>
              </ThemeProvider>
            </QueryClientProvider>
          </DynamicContextProvider>
        </MiniKitProvider>
      </ErudaProvider>
    </NextAuthProvider>
  );
}
