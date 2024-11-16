import {
  DynamicContextProvider as ContextProvider,
  getAuthToken,
} from '@dynamic-labs/sdk-react-core';
import { PropsWithChildren } from 'react';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';

import { config } from '@/config';

const DYNAMIC_ENVIRONMENT_ID = config.dynamicEnvId as string;
console.log(DYNAMIC_ENVIRONMENT_ID);
console.log(process.env.NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID, 'NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID');

const DynamicContextProvider = ({ children }: PropsWithChildren) => {
  if (!DYNAMIC_ENVIRONMENT_ID) return children;

  return (
    <ContextProvider
      theme="dark"
      settings={{
        environmentId: DYNAMIC_ENVIRONMENT_ID,
        appName: 'UNiF AI',
        walletConnectors: [EthereumWalletConnectors],
        events: {
          onAuthSuccess: async () => {
            const authToken = getAuthToken();
            console.log(authToken);
          },
        },
      }}
    >
      {children}
    </ContextProvider>
  );
};

export default DynamicContextProvider;
