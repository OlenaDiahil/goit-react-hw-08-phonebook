import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";


const primaryColor = '#2AF598';
const secondaryColor = '#009EFD';
const whiteColor = '#FFFFFF';
const blackColor = '#071015';
const grayColor = '#656565';

export const FormContainer = styled.div`
  text-align: center;
  margin: 50px auto;
  max-width: 400px;
  padding: 20px;
  background-color: ${whiteColor};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: transparent;
  background: linear-gradient(45deg, ${primaryColor}, ${secondaryColor});
  -webkit-background-clip: text;
  background-clip: text;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: ${blackColor};
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid ${grayColor};
  border-radius: 5px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  background-color: ${primaryColor};
  color: ${whiteColor};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

export const NotMemberText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${grayColor};
`;

export const SignUpLink = styled(NavLink)`
  text-decoration: none;
  color: ${primaryColor};
  font-weight: bold;
`;

