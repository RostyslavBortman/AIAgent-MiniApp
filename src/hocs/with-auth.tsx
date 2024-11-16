import { ComponentType } from 'react';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { Typography } from '@mui/material';

import { SignIn } from '@/components/sign-in';
import { getUserInfo } from '@/utils/wallet.utils';

interface IndexPageParams {
  params: { id: string };
}

export function withAuth(Component: ComponentType<IndexPageParams>) {
  return function WithAuth(props: IndexPageParams) {
    const { user } = useDynamicContext();

    const isAuthorized = Boolean(getUserInfo(user));

    if (!isAuthorized) {
      return (
        <>
          <Typography variant="h1" mb={10}>
            UNiF AI
          </Typography>
          <SignIn />
        </>
      );
    }

    Component.displayName = `withAuth(${Component.displayName || Component.name})`;
    return <Component {...props} />;
  };
}
