import {useState} from 'react'
import styled from "styled-components";
import { FormErrors } from '../interfaces';
import { checkForm } from './utils/checkForm';

export const SignUp = () => {

    const [email,setEmail] = useState<string>("");
    const [password,setPassword] = useState<string>("");
    const [passwordRepeat,setPasswordRepeat] = useState<string>("");
    const [firstName,setFirstName] = useState<string>("");
    const [lastName,setLastName] = useState<string>("");
    const [formErrors,setFormErrors] = useState<Partial<FormErrors>|undefined>()


    const onSubmitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const errors = checkForm({email,password,passwordRepeat,firstName,lastName});
        setFormErrors(errors);
    }

  return (
    <Container>
      <Header>
        <Headline>Already have an account?</Headline>
        <SignInButton>Sign in</SignInButton>
      </Header>
      <Form onSubmit={onSubmitHandler}>
        <Input id="email" type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} onClick={()=>{setFormErrors(undefined)}} aria-label="email-input"></Input>
        <ErrorMessage show={formErrors&&formErrors.email?true:false}>Email is invalid</ErrorMessage>
        <Input id="password" type="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}aria-label="password-input"></Input>
        <ErrorMessage show={formErrors&&formErrors.password?true:false}>Password is invalid</ErrorMessage>
        <Input id="passwordRepeat" type="password" placeholder="password" value={passwordRepeat} onChange={(e)=>setPasswordRepeat(e.target.value)}aria-label="password-repeat-input"></Input>
        <ErrorMessage show={formErrors&&formErrors.passwordRepeat?true:false}>Password doesn't match</ErrorMessage>
        <Input id="firstName" type="text" placeholder="first name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}aria-label="first-name"></Input>
        <ErrorMessage show={formErrors&&formErrors.firstName?true:false}>First name too long</ErrorMessage>
        <Input id="lastName" type="text" placeholder="last name" value={lastName} onChange={(e)=>setLastName(e.target.value)}aria-label="last-name"></Input>
        <ErrorMessage show={formErrors&&formErrors.lastName?true:false}>Last name too long</ErrorMessage>
        <SignUpButton type="submit" >Sign Up</SignUpButton>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 10%;
`;

const Headline = styled.h4``;

const SignInButton = styled.button`
  width: 80px;
  height: auto;
  margin-left: 15px;
  margin-right: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Input = styled.input`
    min-width: 250px; 
    width: 250px;    
    padding: 10px 5px;
    border: none;
    -webkit-box-shadow: 5px 5px 15px 0px #A4A4A4; 
    box-shadow: 5px 5px 15px 0px #A4A4A4;
    border-radius: 10px;
    &:focus{
        outline: 2px solid lightgray;
    }
`;

const ErrorMessage = styled.p<{show:boolean}>`
    color:red;
    margin: 0px;
    margin: 10px 0px;
    visibility: ${props => props.show? "visibile" : "hidden"}
`;

const SignUpButton = styled.button`
    background-color: #eeeeee;
    width: 200px;
    padding: 20px 10px;
    border: none;
    border-radius: 35px;
    -webkit-box-shadow: 5px 5px 15px 0px #A4A4A4; 
    box-shadow: 5px 5px 15px 0px #A4A4A4;
    margin-top: 30px;

`;
