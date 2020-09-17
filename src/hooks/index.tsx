import React from 'react';
import { AuthProvide } from './auth';

const Providers: React.FC = ({ children }) => {
  return <AuthProvide>{children}</AuthProvide>;
};

export default Providers;
