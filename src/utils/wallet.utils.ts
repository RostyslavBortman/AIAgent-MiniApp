import { UserProfile } from '@dynamic-labs/sdk-react-core';

/**
 * Get formatted wallet address.
 * @example Given: 0x81c509b0a7C531ce5869554Cae0F86b467c, Return: 0x81c5...467c
 * @param address
 * @param startDigits - number of digits to show before dots
 * @default 5
 */
export function formatWalletAddress(address: string, startDigits?: number): string {
  const addressStartDigits = startDigits || 5;
  const part1 = address.substring(0, addressStartDigits);
  const part2 = address.substring(address.length - 6, address.length);
  return `${part1}...${part2}`;
}

type UserInfo = {
  address: undefined | string;
  email: undefined | string;
};

export const getUserInfo = (user: UserProfile | undefined): string | undefined => {
  if (!user) return undefined;

  const userInfo = user.verifiedCredentials.reduce(
    (info: UserInfo, nextCredential) => {
      return {
        address: info.address ?? nextCredential.address,
        email: info.email ?? nextCredential.email,
      };
    },
    {
      address: undefined,
      email: undefined,
    }
  );

  const address = userInfo.address ? formatWalletAddress(userInfo.address) : undefined;

  return user.username ?? address ?? userInfo.email;
};
