'use client';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import LanguageIcon from '@mui/icons-material/Language';
import { IDKitWidget, ISuccessResult, VerificationLevel } from '@worldcoin/idkit';
import { useSearchParams } from 'next/navigation';

import Button from '../ui-kit/button';
import Flex from '../ui-kit/flex';
import { config } from '@/config';
import useWorldId from '@/hooks/useWorldId';

const WORLD_ID_AUTH_URL = `https://id.worldcoin.org/authorize?redirect_uri=${config.nextAuthRedirectUrl}&response_type=code&scope=openid+profile+email&client_id=${config.worldAppId}`;

console.log(WORLD_ID_AUTH_URL);

export const SignIn = () => {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');

  // const onSuccess = (params: ISuccessResult) => {
  //   console.log(params);
  // };
  const res = useWorldId({ code: code });

  return (
    <Flex flexDirection="column" width="100%" alignItems="center" gap={2}>
      {config.dynamicEnvId && <DynamicWidget />}

      {/* <IDKitWidget
        app_id={config.worldAppId}
        action="verify"
        onSuccess={onSuccess}
        verification_level={VerificationLevel.Device}
      >
        {({ open }) => (
          <Button variant="contained" onClick={open}>
            <LanguageIcon />
            Log in with World ID
          </Button>
        )}
      </IDKitWidget> */}

      <Button variant="contained" href={WORLD_ID_AUTH_URL}>
        <LanguageIcon />
        Log in with World ID
      </Button>
    </Flex>
  );
};
