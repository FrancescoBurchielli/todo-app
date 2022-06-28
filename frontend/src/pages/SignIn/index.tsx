import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../axios/fetches";
import {
  Container,
  Header,
  SmallButton,
  BigButton,
  Form,
  Input,
  SmallText,
  ErrorMessage,
} from "../../styles/components";
import { FormErrors } from "../../interfaces";
import { checkForm } from "./utils/checkForm";
import { AuthContext } from "../../context/AuthContext";
import Logo from "../../assets/logo.svg"

export const SignIn = () => {
  const navigate = useNavigate(); 
  const {setAuthTokens} = useContext(AuthContext);  ;

  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signInError, setSignInError] = useState<string | undefined>();
  const [formErrors, setFormErrors] = useState<
    Partial<FormErrors> | undefined
  >();

  //utility function to check if form field has errors
  const fieldHasErrors = (field: string): boolean => {
    return formErrors !== undefined && field in formErrors;
  };

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const errors = checkForm({
      email,
      password,
    });

    if (Object.keys(errors).length) {
      setFormErrors(errors);
    } else {
      signIn(email, password)
        .then((response) => {          
          localStorage.setItem('authTokens', JSON.stringify(response.data));
          if(setAuthTokens){
            setAuthTokens(response.data)
          }         
          navigate("/");
        })
        .catch((error) => {
          if(error.response.data.detail){
            setSignInError(error.response.data.detail);
          }else{
            setSignInError("Can't sign you in at the moment. Please try again later");
          }
          
          setFormErrors(undefined);
        });
      }        
    }
  

  return (
    <Container>
      <Header>
        <SmallText>Don't have an account yet?</SmallText>
        <SmallButton onClick={() => navigate("/sign-up")}>Sign Up</SmallButton>
      </Header>
      <img id="logo" src={Logo} alt="logo"/>
      <Form onSubmit={onSubmitHandler}>
        <h2 id="message">Welcome back!</h2>
        <Input
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={() => {
            setFormErrors(undefined);
            setSignInError(undefined);
          }}
          autoComplete="off"
          aria-label="email-input"
        ></Input>
        <ErrorMessage show={fieldHasErrors("email")}>
          {formErrors !== undefined && formErrors.email
            ? formErrors.email
            : "error placeholder"}
        </ErrorMessage>
        <Input
          id="password"
          type="password"
          placeholder="password"
          value={password}
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
          onClick={() => {
            setFormErrors(undefined);
            setSignInError(undefined);
          }}
          aria-label="password-input"
        ></Input>
        <ErrorMessage show={fieldHasErrors("password")}>
          {formErrors !== undefined && formErrors.password
            ? formErrors.password
            : "error placeholder"}
        </ErrorMessage>
        <ErrorMessage show={signInError !== undefined}>
          {signInError ? signInError : "error placeholder"}
        </ErrorMessage>
        <BigButton type="submit">Sign In</BigButton>
      </Form>
    </Container>
  );
};
