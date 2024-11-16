import { DynamicContextProvider as ContextProvider } from '@dynamic-labs/sdk-react-core';
import { PropsWithChildren } from 'react';
import { EthereumWalletConnectors } from '@dynamic-labs/ethereum';

import { config } from '@/config';

const DYNAMIC_ENVIRONMENT_ID = config.dynamicEnvId as string;

const DynamicContextProvider = ({ children }: PropsWithChildren) => {
  if (!DYNAMIC_ENVIRONMENT_ID) return children;

  return (
    <ContextProvider
      theme="dark"
      settings={{
        shadowDOMEnabled: false,
        environmentId: DYNAMIC_ENVIRONMENT_ID,
        appName: 'UNIFAI',
        walletConnectors: [EthereumWalletConnectors],
      }}
    >
      {children}
    </ContextProvider>
  );
};

export default DynamicContextProvider;
