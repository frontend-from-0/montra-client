import React from 'react';
import { Link } from 'react-router-dom';

interface LinkToProps {
  to: string;
  children: React.ReactNode;
}

export const LinkTo = ({ to, children }: LinkToProps) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
      {children}
    </Link>
  );
};
