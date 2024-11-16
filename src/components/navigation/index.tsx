import CreateIcon from '@mui/icons-material/Create';

import Flex from '../ui-kit/flex';
import { AppRoutes } from '@/app/routes';
import useAuth from '@/hooks/auth/useAuth';
import SignOut from '../sign-out';

import NavButton from './styles';

const Navigation = () => {
  const { isAuthorized } = useAuth();

  if (!isAuthorized) return null;

  return (
    <Flex
      justifyContent="space-around"
      position="fixed"
      width="100%"
      gap="1px"
      bgcolor="background.default"
      bottom={0}
    >
      <NavButton href={AppRoutes.Home}>
        <CreateIcon
          sx={{
            padding: 2,
            borderRadius: '50%',
            color: 'text.secondary',
            bgcolor: 'background.default',
            fontSize: 50,
          }}
        />
      </NavButton>
      <SignOut />
    </Flex>
  );
};

export default Navigation;
