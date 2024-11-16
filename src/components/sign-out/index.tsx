import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import Button from '../ui-kit/button';
import { getUserInfo } from '@/utils/wallet.utils';
import useAuth from '@/hooks/auth/useAuth';

const SignOut = () => {
  const { user } = useDynamicContext();
  const { onLogout } = useAuth();

  const handleLogout = () => {
    onLogout();
  };

  if (false) {
    return (
      <>
        <Typography> World Id: </Typography>
        <Typography
          variant="body3"
          borderRadius="12px"
          padding="12px 20px"
          bgcolor="gray.900"
          color="text.primary"
        >
          {getUserInfo(user)}
        </Typography>
      </>
    );
  }

  if (user) {
    return (
      <>
        <Typography mt="auto" color="text.secondary">
          Dynamic Account:{' '}
        </Typography>
        <Typography
          variant="body3"
          borderRadius="12px"
          padding="12px 20px"
          bgcolor="gray.900"
          color="text.primary"
        >
          {getUserInfo(user)}
        </Typography>
        <Button variant="contained" onClick={handleLogout} fullWidth sx={{ mt: 2 }}>
          <LogoutIcon /> Log Out
        </Button>
      </>
    );
  }

  return (
    <Button variant="contained" onClick={handleLogout} fullWidth sx={{ mt: 'auto', mb: 5 }}>
      <LogoutIcon /> Log Out
    </Button>
  );
};

export default SignOut;
