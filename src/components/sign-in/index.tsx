'use client';
import LanguageIcon from '@mui/icons-material/Language';
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';

import { config } from '@/config';
import Button from '../ui-kit/button';
import Flex from '../ui-kit/flex';

import { dynamicWidgetClasses, DynamicWidgetWrapper } from './styles';

const WORLD_ID_AUTH_URL = `https://id.worldcoin.org/authorize?redirect_uri=${config.nextAuthRedirectUrl}&response_type=code&scope=openid+profile+email&client_id=${config.worldAppId}`;

type Props = {
  isDynamicLoading: boolean;
  isWorldLoading: boolean;
};

export const SignIn = ({ isDynamicLoading, isWorldLoading }: Props) => {
  const dynamicContent = (
    <>
      <AccountBalanceWalletOutlinedIcon sx={{ mr: 2 }} /> Log in or sign up
    </>
  );

  return (
    <Flex flexDirection="column" width="100%" alignItems="center" gap={2}>
      <DynamicWidgetWrapper>
        {isDynamicLoading ? (
          <Button variant="contained" fullWidth isLoading={isDynamicLoading}>
            {dynamicContent}
          </Button>
        ) : (
          <DynamicWidget
            innerButtonComponent={dynamicContent}
            buttonClassName={dynamicWidgetClasses.button}
            buttonContainerClassName={dynamicWidgetClasses.buttonContainer}
          />
        )}
      </DynamicWidgetWrapper>

      <Button
        variant="contained"
        href={WORLD_ID_AUTH_URL}
        fullWidth
        startIcon={<LanguageIcon />}
        isLoading={isWorldLoading}
      >
        Log in with World ID
      </Button>
    </Flex>
  );
};
