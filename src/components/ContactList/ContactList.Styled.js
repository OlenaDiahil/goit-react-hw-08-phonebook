import styled from '@emotion/styled';

const primaryColor = '#2AF598';
const whiteColor = '#FFFFFF';
const blackColor = '#071015';


export const ContactListContainer = styled.div`
  text-align: center;
  margin: 20px;
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    font-size: 16px;
    color: ${blackColor};
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background-color: ${primaryColor};
      color: ${whiteColor};
      padding: 5px 10px;
      border: none;
      border-radius: 5px;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;