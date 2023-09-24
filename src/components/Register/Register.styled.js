import styled from '@emotion/styled'
import { NavLink } from "react-router-dom";

export const FormContainer = styled.div`
  text-align: center;
  margin: 50px auto;
  max-width: 400px;
  padding: 20px;
  background-color: #FFFFFF;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: transparent;
  background: linear-gradient(45deg, #2AF598, #009EFD);
  -webkit-background-clip: text;
  background-clip: text;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #071015;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #656565;
  border-radius: 5px;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  background-color: #2AF598;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
`;

export const AlreadyHaveAccountText = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: #656565;
`;

export const SignInLinkContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SignInLink = styled(NavLink)`
  text-decoration: none;
  color: #009EFD;
  font-weight: bold;
`;