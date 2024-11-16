import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const DotsStyled = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '8px',
  height: '25px',

  '& span': {
    width: '6px',
    height: '6px',
    backgroundColor: theme.palette.text.primary,
    borderRadius: '50%',
    animation: `${bounce} 1.2s infinite ease-in-out`,

    '&:nth-child(1)': {
      animationDelay: '0s',
    },

    '&:nth-child(2)': {
      animationDelay: '0.2s',
    },

    '&:nth-child(3)': {
      animationDelay: '0.4s',
    },
  },
}));

const bounce = keyframes`
 0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;
