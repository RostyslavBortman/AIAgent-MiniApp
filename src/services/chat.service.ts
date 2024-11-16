import axios from 'axios';

import { config } from '@/config';
import { getAuthHeader } from '@/utils/api.utils';
import { AccessTokens } from '@/types/auth';
import { IMessage } from '@/types/agent';

const api = `${config.backendApi}/chat`;

class ChatService {
  public constructor() {}

  public async sendMessage(content: string, accessToken: AccessTokens): Promise<IMessage[]> {
    const res = await axios.post(
      `${api}/send-message`,
      {
        content,
      },
      {
        headers: getAuthHeader(accessToken.jwtToken),
      }
    );

    const history = res.data as IMessage[];
    return history;
  }

  public async getHistory(accessToken: AccessTokens): Promise<IMessage[]> {
    const res = await axios.post(
      `${api}/get-history`,
      {},
      {
        headers: getAuthHeader(accessToken.jwtToken),
      }
    );

    return res.data as IMessage[];
  }
}

export const chatService = new ChatService();
