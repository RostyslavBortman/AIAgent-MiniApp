import axios from 'axios';

import { config } from '@/config';
import { AccessTokens } from '@/types/auth';
import { getAuthHeader } from '@/utils/api.utils';

const api = `${config.backendApi}/chat`;

type ExchangeWorldCodeResponse = {
  jwt: {
    access_token: string;
    expires_in: number;
    id_token: string;
    scope: string;
    token_type: string;
  };
} & AccessTokens;

class AuthService {
  public constructor() {}

  public async exchangeDynamicJwt(dynamicJwt: string): Promise<AccessTokens> {
    const res = await axios.post(`${api}/exchange-dynamic-jwt`, {
      dynamicJwt: dynamicJwt,
    });

    const tokens = res.data as AccessTokens;
    return tokens;
  }

  public async exchangeWorldCode(worldCode: string): Promise<AccessTokens> {
    const res = await axios.post(`${api}/exchange-world-code`, {
      code: worldCode,
    });

    const tokens = res.data as ExchangeWorldCodeResponse;

    return {
      worldAccessToken: tokens.jwt.access_token,
      jwtToken: tokens.jwtToken,
      refreshToken: tokens.refreshToken,
    };
  }

  public async refreshToken(accessTokens: AccessTokens): Promise<AccessTokens> {
    const res = await axios.get(`${api}/refresh-token?${accessTokens.refreshToken}`, {
      headers: getAuthHeader(accessTokens.jwtToken),
    });

    return res.data as AccessTokens;
  }

  public async revokeToken(accessTokens: AccessTokens): Promise<boolean> {
    try {
      const res = await axios.get(`${api}/revoke-token?${accessTokens.refreshToken}`, {
        headers: getAuthHeader(accessTokens.jwtToken),
      });

      const response = res.data as { success: boolean };
      return response.success;
    } catch (e) {
      console.error(e);
      return false;
    }
  }

  public async getWorldUserInfo(accessTokens: AccessTokens) {
    try {
      const res = await fetch('https://id.worldcoin.org/userinfo', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessTokens.worldAccessToken}`,
        },
      });

      console.log(res);
      return null;
    } catch (e) {
      console.error(e);
      return null;
    }
  }
}

export const authService = new AuthService();
