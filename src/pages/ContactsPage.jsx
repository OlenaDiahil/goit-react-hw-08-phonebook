import { ContactList } from 'components/ContactList/ContactList'
import { ContactsForm } from 'components/ContactsForm/ContactsForm'
import { Filter } from 'components/Filter/Filter'
import UserMenu from 'components/UserMenu/UserMenu'
import React from 'react'

import styled from '@emotion/styled';
const blackColor = '#071015';

const PageContainer = styled.div`
  text-align: center;
  margin: 20px;
`;

const PageTitle = styled.h2`
  font-size: 24px;
  color: ${blackColor};
  margin-bottom: 20px;
`;

function ContactsPage() {
  return (
    <PageContainer>
      <UserMenu/>
      <PageTitle>ContactsForm</PageTitle>
      <ContactsForm />
      <PageTitle>Contacts</PageTitle>
      <Filter />
      <ContactList />    
    </PageContainer>
  )
}

export default ContactsPage;
