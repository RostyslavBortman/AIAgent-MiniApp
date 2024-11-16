'use client'; // Required for Next.js

import { MiniKit } from '@worldcoin/minikit-js';
import { ReactNode, useEffect } from 'react';

import { config } from '@/config';

export default function MiniKitProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    MiniKit.install(config.worldAppId);
    console.log(MiniKit.isInstalled());
  }, []);

  return <>{children}</>;
}
