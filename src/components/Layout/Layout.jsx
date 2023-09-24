import React, { Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { Content, LoadingText, PageContainer, Title } from './Layout.Styled';

export const Layout = () => {
  return (
    <PageContainer>
        <Title>Phonebook</Title>
      <Content>
        <Suspense fallback={<LoadingText>Loading</LoadingText>}>
          <Outlet />
        </Suspense>
      </Content>
    </PageContainer>
  );
};