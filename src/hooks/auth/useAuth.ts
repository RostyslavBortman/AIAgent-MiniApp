import { useQuery } from '@tanstack/react-query';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';

import { dataStorage } from '@/services/data-storage.service';
import { authService } from '@/services/auth.service';
import { AccessTokens } from '@/types/auth';

import useExchangeDynamicJwt from './useExchangeDynamicJwt';
import useExchangeWorldCode from './useExchangeWorldCode';

export const ACCESS_TOKEN_LS = 'access-token';

type UseAuthParams = {
  enabled?: boolean;
};

export type UseAuthReturnType = {
  isAuthorized: boolean;
  isAuthLoading: boolean;
  isDynamicLoading: boolean;
  isWorldLoading: boolean;
  accessTokens: null | AccessTokens;
  setAccessTokens: (accessTokens: AccessTokens) => Promise<void>;
  getAccessTokens: () => Promise<null | AccessTokens>;
  onLogout: () => void;
};

const useAuth = (props?: UseAuthParams): UseAuthReturnType => {
  const { handleLogOut } = useDynamicContext();

  const {
    data: auth,
    isLoading: isAuthLoading,
    refetch,
  } = useQuery({
    enabled: props?.enabled ?? true,
    queryKey: ['useAuth'],
    queryFn: async () => {
      try {
        const accessTokens = await getAccessTokens();
        const isAuthorized = Boolean(accessTokens);

        if (!isAuthorized) {
          onLogout(true);
        }

        return {
          accessTokens: accessTokens,
          isAuthorized: isAuthorized,
        };
      } catch (e) {
        console.error(e);
        onLogout();

        return {
          accessTokens: null,
          isAuthorized: false,
        };
      }
    },
  });

  const onLogout = (disableRefetch?: boolean) => {
    try {
      handleLogOut();
      removeAccessTokens(disableRefetch);
    } catch (e) {
      console.log(e);
    }
  };

  const setAccessTokens = async (accessTokens: AccessTokens): Promise<void> => {
    await dataStorage.setItem(ACCESS_TOKEN_LS, accessTokens);
    refetch();
  };

  const getAccessTokens = async (): Promise<null | AccessTokens> => {
    const accessTokens = await dataStorage.getItem<AccessTokens>(ACCESS_TOKEN_LS);
    return accessTokens;
  };

  const removeAccessTokens = async (disableRefetch?: boolean) => {
    const accessTokens = await getAccessTokens();
    if (accessTokens) {
      await authService.revokeToken(accessTokens);
    }
    await dataStorage.removeItem(ACCESS_TOKEN_LS);

    if (!disableRefetch) {
      refetch();
    }
  };

  const { isLoading: isDynamicLoading } = useExchangeDynamicJwt({ setAccessTokens, onLogout });
  const { isLoading: isWorldLoading } = useExchangeWorldCode({ setAccessTokens, onLogout });

  return {
    isAuthorized: Boolean(auth?.isAuthorized),
    isAuthLoading: isAuthLoading,
    isDynamicLoading: isDynamicLoading,
    isWorldLoading: isWorldLoading,
    accessTokens: auth?.accessTokens ?? null,
    setAccessTokens: setAccessTokens,
    getAccessTokens: getAccessTokens,
    onLogout: onLogout,
  };
};

export default useAuth;
