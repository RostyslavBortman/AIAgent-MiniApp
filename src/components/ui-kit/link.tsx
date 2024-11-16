import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { LinkProps as MuiLinkProps, Link as MuiLink } from '@mui/material';
import { CSSProperties, ReactNode } from 'react';

type Props = {
  icon?: ReactNode;
  spanStyles?: CSSProperties;
} & NextLinkProps &
  MuiLinkProps;

const Link = ({ icon, variant = 'body2', children, ...props }: Props) => {
  return (
    <MuiLink component={NextLink} variant={variant} {...props}>
      {icon}
      {children}
    </MuiLink>
  );
};

export default Link;
