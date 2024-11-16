import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';
import { ReactNode } from 'react';

import Loader from './loader';

export type ButtonProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
} & Omit<MuiButtonProps, 'disabled'>;

const Button = ({
  children,
  startIcon,
  endIcon,
  variant = 'text',
  sx,
  isDisabled,
  isLoading,
  ...props
}: ButtonProps) => {
  const disabled = isDisabled || isLoading;

  const childrenWithIcon = getChildrenWithIcon(children, startIcon, endIcon);

  const content = isLoading ? <Loader size={24} isDisabled /> : childrenWithIcon;

  return (
    <MuiButton variant={variant} disabled={disabled} sx={{ gap: 2, ...sx }} {...props}>
      {content}
    </MuiButton>
  );
};

const getChildrenWithIcon = (children: ReactNode, startIcon?: ReactNode, endIcon?: ReactNode) => {
  if (!startIcon && !endIcon) return children;
  return startIcon ? (
    <>
      {startIcon}
      {children}
    </>
  ) : (
    <>
      {children}
      {endIcon}
    </>
  );
};

export default Button;
