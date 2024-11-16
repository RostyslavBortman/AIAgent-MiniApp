import emotionStyled from '@emotion/styled';

import Link from '../ui-kit/link';
import { withTransientProps } from '@/theme/utils/withTransientProps';
import { NAVBAR_HEIGHT } from '@/constants/heights';

const NavButton = emotionStyled(
  Link,
  withTransientProps
)<{ $isActive: boolean }>(({ theme, $isActive }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: `${NAVBAR_HEIGHT}px`,
  gap: theme.spacing(1),
  color: $isActive ? theme.palette.gray[900] : theme.palette.gray[400],
}));

export default NavButton;
