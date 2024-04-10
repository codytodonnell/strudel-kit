import React from 'react';
import { Link, LinkProps } from '@mui/material';
import NextLink from 'next/link'

interface AppLinkProps extends LinkProps {
  href: string;
}
/**
 * Link component for in-app links.
 * 
 */
export const AppLink: React.FC<AppLinkProps> = ({ href, ...rest}) => {
  return (
    <NextLink href={href}>
      <Link
        {...rest}
        component="span"
      />
    </NextLink>
  )
}