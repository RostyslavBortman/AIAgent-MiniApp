import emotionStyled from '@emotion/styled';
import { Box } from '@mui/material';

export const dynamicWidgetClasses = {
  widgetContainer: 'dynamic-widget__container',
  button: 'dynamic-widget-button',
  buttonContainer: 'dynamic-widget-button__container',
};

export const DynamicWidgetWrapper = emotionStyled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '240px',
  display: 'flex',
  justifyContent: 'center',

  [`& .${dynamicWidgetClasses.widgetContainer}`]: {
    width: '100%',
    zIndex: 0,
  },

  [`& .${dynamicWidgetClasses.button}`]: {
    width: '100%',
    height: '56px',
    padding: '0',
    border: 'none !important',
    backgroundColor: `${theme.palette.background.secondary} !important`,

    '&:hover': {
      backgroundColor: `${theme.palette.gray[600]} !important`,
    },

    '& span': {
      width: '100%',
    },
  },
}));
