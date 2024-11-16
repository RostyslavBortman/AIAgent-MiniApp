import { ComponentType } from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';

import { SignIn } from '@/components/sign-in';
import useAuth from '@/hooks/auth/useAuth';
import Loader from '@/components/ui-kit/loader';

interface IndexPageParams {
  params: { id: string };
}

export function withAuth(Component: ComponentType<IndexPageParams>) {
  return function WithAuth(props: IndexPageParams) {
    const { isAuthorized, isDynamicLoading, isWorldLoading, isAuthLoading } = useAuth();

    if (isAuthLoading) {
      return <Loader />;
    }

    if (!isAuthorized) {
      return (
        <>
          <Image
            src="/static/logo.jpg"
            width={250}
            height={250}
            alt="Image logo"
            style={{ margin: '50px 0px', borderRadius: '50%' }}
            priority
          />
          <Typography variant="h1" color="text.secondary" mt="auto">
            UNIFAI
          </Typography>
          <Typography variant="subtitle2" mt={0.5} mb={16} color="text.secondary">
            WEB3 AI Agent
          </Typography>
          <SignIn isDynamicLoading={isDynamicLoading} isWorldLoading={isWorldLoading} />
        </>
      );
    }

    Component.displayName = `withAuth(${Component.displayName || Component.name})`;
    return <Component {...props} />;
  };
}
