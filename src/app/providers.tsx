'use client';

import { ErudaProvider } from '@/components/Eruda';
import MiniKitProvider from '@/components/minikit-provider';
import NextAuthProvider from '@/components/next-auth-provider';
import { Layout } from '@/layout';
import { ThemeProvider } from '@/theme/ThemeProvider';
import { PropsWithChildren } from 'react';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <NextAuthProvider>
      <ErudaProvider>
        <MiniKitProvider>
          <body>
            <ThemeProvider>
              <Layout>{children}</Layout>
            </ThemeProvider>
          </body>
        </MiniKitProvider>
      </ErudaProvider>
    </NextAuthProvider>
  );
}
