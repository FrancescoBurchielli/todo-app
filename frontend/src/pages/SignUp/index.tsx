import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../axios/fetches";
import { FormErrors } from "../../interfaces";
import { SignUpAPIResponse } from "./interfaces";
import {
  Container,
  ErrorMessage,
  Form,
  Header,
  SmallText,
  BigText,
  Input,
  SmallButton,
  BigButton,
} from "../../styles/components";
import { checkForm } from "./utils/checkForm";

export const SignUp = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [formErrors, setFormErrors] = useState<
    Partial<FormErrors> | undefined
  >();

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    const errors = checkForm({
      email,
      password,
      passwordRepeat,
      firstName,
      lastName,
    });

    //if any error, set the formErrors state; otherwise, submit form
    if (Object.keys(errors).length) {
      setFormErrors(errors);
    } else {
      signUp({ email, password, passwordRepeat, firstName, lastName })
        .then((response) => {
          if (response.status === 201) {
            navigate("/sign-up/success");
          } else {
          }
        })
        .catch((error) => {
          const errorData: SignUpAPIResponse = error.response.data;
          const errors: Record<string, string> = {};
          for (const [key, value] of Object.entries(errorData)) {
            let newKey;
            switch (key) {
              case "first_name":
                newKey = "firstName";
                break;
              case "last_name":
                newKey = "lastName";
                break;
              case "password2":
                newKey = "passwordRepeat";
                break;
              default:
                newKey = key;
            }
            errors[newKey] = value;
          }
          setFormErrors(errors);
        });
    }
  };

  //utility function to check if form field has errors
  const fieldHasErrors = (field: string): boolean => {
    return formErrors !== undefined && field in formErrors;
  };

  return (
    <Container>
      <Header>
        <SmallText>Already have an account?</SmallText>
        <SmallButton onClick={() => navigate("/sign-in")}>Sign in</SmallButton>
      </Header>
      <Form onSubmit={onSubmitHandler}>
        <BigText>We can't wait to have you on board!</BigText>
        <Input
          id="email"
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onClick={() => {
            setFormErrors(undefined);
          }}
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
          autoComplete="password"
          onChange={(e) => setPassword(e.target.value)}
          onClick={() => {
            setFormErrors(undefined);
          }}
          aria-label="password-input"
        ></Input>
        <ErrorMessage show={fieldHasErrors("password")}>
          {formErrors !== undefined && formErrors.password
            ? formErrors.password
            : "error placeholder"}
        </ErrorMessage>
        <Input
          id="passwordRepeat"
          type="password"
          placeholder="password repeat"
          value={passwordRepeat}
          autoComplete="repeat-password"
          onChange={(e) => setPasswordRepeat(e.target.value)}
          onClick={() => {
            setFormErrors(undefined);
          }}
          aria-label="password-repeat-input"
        ></Input>
        <ErrorMessage show={fieldHasErrors("passwordRepeat")}>
          {formErrors !== undefined && formErrors.passwordRepeat
            ? formErrors.passwordRepeat
            : "error placeholder"}
        </ErrorMessage>
        <Input
          id="firstName"
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onClick={() => {
            setFormErrors(undefined);
          }}
          aria-label="first-name"
        ></Input>
        <ErrorMessage show={fieldHasErrors("firstName")}>
          {formErrors !== undefined && formErrors.firstName
            ? formErrors.firstName
            : "error placeholder"}
        </ErrorMessage>
        <Input
          id="lastName"
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onClick={() => {
            setFormErrors(undefined);
          }}
          aria-label="last-name"
        ></Input>
        <ErrorMessage show={fieldHasErrors("lastName")}>
          {formErrors !== undefined && formErrors.lastName
            ? formErrors.lastName
            : "error placeholder"}
        </ErrorMessage>
        <BigButton type="submit">Sign Up</BigButton>
      </Form>
    </Container>
  );
};
