import { useQuery } from '@tanstack/react-query';

import useAuth from '../auth/useAuth';
import { authService } from '@/services/auth.service';

const useWorldAccount = () => {
  const { accessTokens } = useAuth();

  const {} = useQuery({
    enabled: false,
    queryKey: ['useWorldAccount', accessTokens?.worldAccessToken],
    queryFn: async () => {
      const res = await authService.getWorldUserInfo(accessTokens!);

      return null;
    },
  });

  return null;
};

export default useWorldAccount;
