import emotionStyled from '@emotion/styled';

import Link from '../ui-kit/link';
import { NAVBAR_HEIGHT } from '@/constants/heights';

const NavButton = emotionStyled(Link)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: `${NAVBAR_HEIGHT}px`,
  gap: theme.spacing(1),
}));

export default NavButton;
