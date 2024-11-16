import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { config } from '@/config';

type UseWorldIdReturnType = {
  connect: () => Promise<void>;
};

type UseWorldIdParams = {
  code: string | null;
};

const useWorldId = ({ code }: UseWorldIdParams): UseWorldIdReturnType => {
  const { data } = useQuery({
    enabled: Boolean(code),
    queryKey: ['useWorldId', code],
    queryFn: async () => {
      const data = new URLSearchParams();
      data.append('code', code!);
      data.append('grant_type', 'authorization_code');
      data.append('redirect_uri', config.nextAuthRedirectUrl);

      const res = await fetch('https://id.worldcoin.org/token', {
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(`${config.worldAppId}:${config.worldSecret}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: data,
      });

      console.log(res);

      return null;
    },
  });

  const connect = useMutation({
    mutationKey: ['connectWithWorldId'],
    mutationFn: async () => {
      // const res = await axios.get(`${config.data.}`);
    },
  });

  return {
    connect: connect.mutateAsync,
  };
};

export default useWorldId;
