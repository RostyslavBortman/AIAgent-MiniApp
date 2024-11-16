import styled from '@emotion/styled';
import { Box, IconButton, Typography } from '@mui/material';

import { NAVBAR_HEIGHT } from '@/constants/heights';

export const AgentInputWrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',

  width: 'calc(100% - 32px)',

  overflow: 'auto',

  bottom: NAVBAR_HEIGHT,
  padding: theme.spacing(3, 5),
  paddingRight: 0,

  backgroundColor: theme.palette.gray[600],
  borderRadius: '12px',
}));

export const AgentInputStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  width: '100%',
  maxHeight: '220px',

  overflow: 'auto',
  overflowWrap: 'anywhere',

  paddingRight: theme.spacing(2),

  color: theme.palette.text.primary,
  lineHeight: '30px',

  '&:focus-visible': {
    outline: 'none',
  },
}));

export const AgentInputPlaceholder = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  color: theme.palette.text.placeholder,
  cursor: 'text',
}));

export const AgentSendIconButton = styled(IconButton)(({ theme }) => ({
  margin: theme.spacing(0, 2),
  marginTop: 'auto',
  backgroundColor: theme.palette.gray[100],
  color: theme.palette.gray[900],

  ':hover': {
    backgroundColor: theme.palette.gray[600],
  },
}));
