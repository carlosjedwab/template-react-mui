import { Grid } from '@mui/material';

import { LoggedInSidebar } from 'app/modules/sidebar';
import * as React from 'react';

export interface PageWrapperProps {
  children: React.ReactNode;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <Grid container columnSpacing={4} direction={'row'} height="100%">
      <Grid item>
        <LoggedInSidebar />
      </Grid>
      <Grid item>{children}</Grid>
    </Grid>
  );
};
