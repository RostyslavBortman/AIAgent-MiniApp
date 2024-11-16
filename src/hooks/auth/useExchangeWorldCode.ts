import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';

import { authService } from '@/services/auth.service';
import { AppRoutes } from '@/app/routes';

import { UseAuthReturnType } from './useAuth';

type UseExchangeWorldCodeParams = {
  setAccessTokens: UseAuthReturnType['setAccessTokens'];
  onLogout: UseAuthReturnType['onLogout'];
};

type UseExchangeWorldReturnType = {
  isLoading: boolean;
};

const useExchangeWorldCode = ({
  setAccessTokens,
  onLogout,
}: UseExchangeWorldCodeParams): UseExchangeWorldReturnType => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  const { isLoading } = useQuery({
    enabled: Boolean(code),
    queryKey: ['exchangeWorldId'],
    queryFn: async () => {
      try {
        const accessTokens = await authService.exchangeWorldCode(code!);
        setAccessTokens(accessTokens);
      } catch (e) {
        console.error(e);
        router.push(AppRoutes.Home);
        onLogout();
      }

      return null;
    },
  });

  return { isLoading: isLoading };
};

export default useExchangeWorldCode;
