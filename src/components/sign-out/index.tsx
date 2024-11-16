import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { signOut, useSession } from 'next-auth/react';
import { Typography } from '@mui/material';

import Button from '../ui-kit/button';
import { getUserInfo } from '@/utils/wallet.utils';

const SignOut = () => {
  const { data: session } = useSession();
  const { user, handleLogOut } = useDynamicContext();

  if (session) {
    return (
      <>
        <Typography> World Id: </Typography>
        <Typography
          variant="body3"
          borderRadius="12px"
          padding="12px 20px"
          bgcolor="gray.900"
          color="text.secondary"
        >
          {session?.user?.name?.slice(0, 10)}
        </Typography>
        <Button variant="contained" onClick={() => signOut()}>
          Log Out
        </Button>
      </>
    );
  }

  if (user) {
    return (
      <>
        <Typography>Dynamic Account: </Typography>
        <Typography
          variant="body3"
          borderRadius="12px"
          padding="12px 20px"
          bgcolor="gray.900"
          color="text.secondary"
        >
          {getUserInfo(user)}
        </Typography>
        <Button variant="contained" onClick={handleLogOut} sx={{ mt: 2 }}>
          Log Out
        </Button>
      </>
    );
  }

  return null;
};

export default SignOut;
