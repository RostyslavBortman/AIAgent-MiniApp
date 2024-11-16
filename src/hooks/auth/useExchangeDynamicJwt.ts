import { getAuthToken, useDynamicEvents } from '@dynamic-labs/sdk-react-core';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';

import { AppRoutes } from '@/app/routes';
import { authService } from '@/services/auth.service';

import { UseAuthReturnType } from './useAuth';

type UseExchangeDynamicJwtParams = {
  setAccessTokens: UseAuthReturnType['setAccessTokens'];
  onLogout: UseAuthReturnType['onLogout'];
};

type UseExchangeDynamicJwtReturnType = {
  isLoading: boolean;
};

const useExchangeDynamicJwt = ({
  setAccessTokens,
  onLogout,
}: UseExchangeDynamicJwtParams): UseExchangeDynamicJwtReturnType => {
  const router = useRouter();

  useDynamicEvents('walletAdded', async ({ isAuthenticated }) => {
    if (isAuthenticated) {
      const authToken = getAuthToken();
      authToken && exchangeDynamicJwt.mutateAsync(authToken);
      router.push(AppRoutes.Home);
    }
  });

  const exchangeDynamicJwt = useMutation({
    mutationKey: ['exchangeDynamicJwt'],
    mutationFn: async (dynamicJwt: string) => {
      try {
        const accessTokens = await authService.exchangeDynamicJwt(dynamicJwt);
        setAccessTokens(accessTokens);
      } catch (e) {
        console.error(e);
        onLogout();
      }
    },
  });

  return { isLoading: exchangeDynamicJwt.isPending };
};

export default useExchangeDynamicJwt;
