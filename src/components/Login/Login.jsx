import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "redux/auth";
import { setToken } from "redux/auth/authSlice";
import { FormContainer, FormTitle, Input, Label, NotMemberText, SubmitButton, Form, SignUpLink } from "./Login.styled";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = () => {
  const [formData, setFormData] = useState({...INITIAL_STATE});
  const [login] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await login(formData);

    if (data) {
      console.log(data.token)
      dispatch(setToken(data.token));
      navigate("/");
    }

    reset();
  };

  const reset = () => {
    setFormData(INITIAL_STATE);
  };


    return (
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormTitle>Sign in to your account</FormTitle>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            autoComplete="current-password"
            required
          />
          <SubmitButton  type="submit">Sign in</SubmitButton>
        </Form>
        <NotMemberText>Not a member?</NotMemberText>
        <SignUpLink to="/register">Sign up</SignUpLink>
      </FormContainer>
    );
};
export default Login;