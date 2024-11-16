import CreateIcon from '@mui/icons-material/Create';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { usePathname } from 'next/navigation';

import Flex from '../ui-kit/flex';
import { AppRoutes } from '@/app/routes';
import useAuth from '@/hooks/auth/useAuth';

import NavButton from './styles';

const LINKS = [
  {
    Icon: CreateIcon,
    label: 'Home',
    href: AppRoutes.Home,
  },
  {
    Icon: AccountCircleOutlinedIcon,
    label: 'LogOut',
    href: AppRoutes.Profile,
  },
];

const Navigation = () => {
  const pathname = usePathname();

  const { isAuthorized } = useAuth();

  if (!isAuthorized) return null;

  return (
    <Flex
      justifyContent="space-between"
      position="fixed"
      width="100%"
      gap="1px"
      bgcolor="background.default"
      bottom={0}
    >
      {LINKS.map(({ Icon, label, href }) => (
        <NavButton href={href} key={label} $isActive={pathname === href}>
          {Icon && <Icon sx={{ fontSize: 40 }} />}
        </NavButton>
      ))}
    </Flex>
  );
};

export default Navigation;
