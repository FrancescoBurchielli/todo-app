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
  BigText,
} from "../../styles/components";
import { FormErrors } from "../../interfaces";
import { checkForm } from "./utils/checkForm";
import { AuthContext } from "../../context/AuthContext";

export const SignIn = () => {
  const navigate = useNavigate(); 
  const {setAuthTokens} = useContext(AuthContext);  ;

  
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [accountError, setAccountError] = useState<string | undefined>();
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
          setAccountError(error.response.data.detail);
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
      <Form onSubmit={onSubmitHandler}>
        <BigText>Welcome back!</BigText>
        <Input
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={() => {
            setFormErrors(undefined);
            setAccountError(undefined);
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
            setAccountError(undefined);
          }}
          aria-label="password-input"
        ></Input>
        <ErrorMessage show={fieldHasErrors("password")}>
          {formErrors !== undefined && formErrors.password
            ? formErrors.password
            : "error placeholder"}
        </ErrorMessage>
        <ErrorMessage show={accountError !== undefined}>
          {accountError ? accountError : "error placeholder"}
        </ErrorMessage>
        <BigButton type="submit">Sign In</BigButton>
      </Form>
    </Container>
  );
};
