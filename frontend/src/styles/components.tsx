import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.backgroundColorMain};
  color: white;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 10%;
`;

export const SmallText = styled.h5`
  color:white;
`;

export const BigText = styled.h2`
  color: white;
  text-align:center;
  margin-bottom:70px;  
 
`;

export const VeryBigText = styled.h1`
  color: white;
  text-align:center;
  margin-bottom:40px;  
  padding: 0px 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Input = styled.input`
  @media only screen and (min-width: 667px) {
    width: 350px;
  }
  min-width: 250px;
  width: 250px;
  padding: 10px 5px;
  border: none;
  background: none;
  border-bottom: ${props => props.theme.borderInputFields};   
  color: white;
 
  &:focus {
    outline: none;    
  }

  &:active {
    background: none;    
  }
  
  &::placeholder{
    color:rgba(255, 255, 255, 0.5);
  }
`;

export const ErrorMessage = styled.p<{ show: boolean }>`
  color: ${props => props.theme.buttonColor};
  font-size: 13px;
  margin: 0px;
  margin: 10px 0px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export const BaseButton = styled.button`
  cursor: pointer;
  background-color: ${props => props.theme.buttonColor};
  border: none;
  border-radius: 35px;
  color: white;
`;

export const SmallButton = styled(BaseButton)`
  width: 80px;
  height: auto;
  margin: 0px 20px 0px 15px;
  padding: 7px 3px;
`;

export const BigButton = styled(BaseButton)`
  width: 200px;
  margin-top: 30px;
  padding: 20px 10px;
`;
