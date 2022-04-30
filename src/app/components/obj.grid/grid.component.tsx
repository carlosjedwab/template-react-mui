import * as React from 'react';
import { Stack, StackProps } from '@mui/material';

export const Row: React.FC<StackProps> = (props) => {
  return <Stack direction="row" {...props} />;
};

export const Column: React.FC<StackProps> = (props) => {
  return <Stack direction="column" {...props} />;
};
