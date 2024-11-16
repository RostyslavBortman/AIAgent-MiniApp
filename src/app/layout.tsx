import type { Metadata } from 'next';
import { Suspense } from 'react';

import { Layout } from '@/layout';

import Providers from './providers';

export const metadata: Metadata = {
  title: 'UNIFAI',
  description: 'UNIFAI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense>
          <Providers>
            <Layout>{children}</Layout>
          </Providers>
        </Suspense>
      </body>
    </html>
  );
}
