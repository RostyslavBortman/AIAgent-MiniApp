import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';

import { chatService } from '@/services/chat.service';
import useAuth from '../auth/useAuth';
import { IMessage } from '@/types/agent';

type UseChatReturnType = {
  data: null | IMessage[];
  sendMessage: (content: string) => void;
  isLoading: boolean;
};

const useChat = (): UseChatReturnType => {
  const { isAuthorized, getAccessTokens, onLogout } = useAuth();

  const { data, isLoading, refetch } = useQuery({
    enabled: Boolean(isAuthorized),
    queryKey: ['getChatHistory'],
    queryFn: async () => {
      try {
        const accessTokens = await getAccessTokens();
        if (!accessTokens) return onLogout();

        const history = await chatService.getHistory(accessTokens);
        return history;
      } catch (e) {
        const error = e as AxiosError;

        if (error.response?.status === 401) {
          onLogout();
        }

        return [];
      }
    },
  });

  const sendMessage = useMutation({
    mutationKey: ['sendMessage'],
    mutationFn: async (content: string) => {
      const accessTokens = await getAccessTokens();
      if (!accessTokens) return onLogout();

      await chatService.sendMessage(content, accessTokens);
      refetch();
    },
  });

  return { data: data ?? null, sendMessage: sendMessage.mutateAsync, isLoading: isLoading };
};

export default useChat;
