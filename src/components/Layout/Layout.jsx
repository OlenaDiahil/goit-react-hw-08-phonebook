import React, { Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { Content, Header, LoadingText, PageContainer, Title } from './Layout.Styled';

export const Layout = () => {
  return (
    <PageContainer>
      <Header>
        <Title>Phonebook</Title>
      </Header>
      <Content>
        <Suspense fallback={<LoadingText>Loading</LoadingText>}>
          <Outlet />
        </Suspense>
      </Content>
    </PageContainer>
  );
};