import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from 'react';

import useAuth from '@/hooks/auth/useAuth';
import { BaseDialog } from '../dialogs/base';
import Button from '../ui-kit/button';

const SignOut = () => {
  const { onLogout } = useAuth();

  const handleLogout = () => {
    onLogout();
    onToggle();
  };

  const [isOpened, setIsOpened] = useState(false);

  const onToggle = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <IconButton
        onClick={onToggle}
        sx={{
          '&:hover': {
            bgcolor: 'background.default',
          },
        }}
      >
        <LogoutIcon
          sx={{
            padding: 2,
            borderRadius: '50%',
            color: 'text.secondary',
            bgcolor: 'background.default',
            fontSize: 50,
          }}
        />
      </IconButton>

      <BaseDialog
        open={isOpened}
        onClose={onToggle}
        header="Are you sure?"
        actions={
          <>
            <Button variant="outlined" sx={{ height: '56px' }} onClick={onToggle}>
              Cancel
            </Button>
            <Button variant="contained" onClick={handleLogout}>
              <LogoutIcon /> Log Out
            </Button>
          </>
        }
      ></BaseDialog>
    </>
  );
};

export default SignOut;
