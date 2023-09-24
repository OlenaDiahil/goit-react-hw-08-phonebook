import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation, useRegisterMutation } from "redux/auth";
import { setToken } from "redux/auth/authSlice";
import { Form, AlreadyHaveAccountText, FormContainer, FormGroup, FormTitle, Input, Label, SignInLink, SignInLinkContainer, SubmitButton } from "./Register.styled";

const INITIAL_STATE = {
  email: "",
  name: "",
  password: "",
};

export default function Register() {
  const [formData, setFormData] = useState({ ...INITIAL_STATE });
  const [register] = useRegisterMutation();
  const [login] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)

    if (formData.email && formData.name && formData.password) {
      const response = await register(formData);

      if (response) {
        const { data } = await login({
          email: formData.email,
          password: formData.password,
        });
        console.log(data.token)
        dispatch(setToken(data.token));
        navigate("/contacts");
      }
    }
    reset();
  };

  const reset = () => {
    setFormData(INITIAL_STATE);
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Sign up</FormTitle>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            name="name"
            type="text"
            autoComplete="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>
        <SubmitButton type="submit">Sign up</SubmitButton>
      </Form>
      <AlreadyHaveAccountText>Already have an account?</AlreadyHaveAccountText>
      <SignInLinkContainer>
        <SignInLink to="/login">Sign in</SignInLink>
      </SignInLinkContainer>
    </FormContainer>
  );
}