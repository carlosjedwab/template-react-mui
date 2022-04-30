import * as React from 'react';
import { LoggedInSidebar } from 'app/modules/sidebar';
import { LoggedOutSidebar } from 'app/modules/sidebar/logged-out-sidebar.component';
import { Column, Row } from '../obj.grid';

export interface PageWrapperProps {
  children: React.ReactNode;
  loggedIn?: boolean;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, loggedIn }) => {
  return loggedIn ? (
    <Row height="100%" sx={{ backgroundColor: '#FFA740' }}>
      <LoggedInSidebar />

      <Column flex="auto" padding={2} sx={{ backgroundColor: '#FFF8F5' }}>
        {children}
      </Column>
    </Row>
  ) : (
    <Column height="100%" sx={{ backgroundColor: '#FFA740' }}>
      <LoggedOutSidebar />

      <Column flex="auto" padding={2} sx={{ backgroundColor: '#FFF8F5' }}>
        {children}
      </Column>
    </Column>
  );
};
