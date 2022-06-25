import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 10%;
`;

export const SmallText = styled.h5``;

export const BigText = styled.h2`
  text-align:center;
  margin-bottom:40px;  
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
  min-width: 250px;
  width: 250px;
  padding: 10px 5px;
  border: none;
  -webkit-box-shadow: 5px 5px 15px 0px #a4a4a4;
  box-shadow: 5px 5px 15px 0px #a4a4a4;
  border-radius: 10px;
  &:focus {
    outline: 2px solid lightgray;
  }
`;

export const ErrorMessage = styled.p<{ show: boolean }>`
  color: red;
  font-size: 13px;
  margin: 0px;
  margin: 10px 0px;
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
`;

export const BaseButton = styled.button`
  background-color: #eeeeee;
  border: none;
  border-radius: 35px;
  -webkit-box-shadow: 5px 5px 15px 0px #a4a4a4;
  box-shadow: 5px 5px 15px 0px #a4a4a4;
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
