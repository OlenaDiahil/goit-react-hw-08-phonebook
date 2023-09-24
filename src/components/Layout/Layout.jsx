import React, { Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { PageContainer, Title } from './Layout.Styled';

export const Layout = () => {
  return (
    <PageContainer>
        <Title>Phonebook</Title>
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
    </PageContainer>
  );
};