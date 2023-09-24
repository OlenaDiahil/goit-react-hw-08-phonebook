import styled from '@emotion/styled';

const primaryColor = '#2AF598';
const secondaryColor = '#009EFD';
const whiteColor = '#FFFFFF';
const grayColor = '#656565';


export const FormContainer = styled.div`
  text-align: center;
  margin: 20px;
  form {
    h2 {
      font-size: 20px;
      margin-bottom: 10px;
      background: linear-gradient(45deg, ${primaryColor}, ${secondaryColor});
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 16px;
      border: 1px solid ${grayColor};
      border-radius: 5px;
      font-size: 16px;
    }
    button {
      background-color: ${primaryColor};
      color: ${whiteColor};
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      font-size: 18px;
      cursor: pointer;
    }
  }
`;