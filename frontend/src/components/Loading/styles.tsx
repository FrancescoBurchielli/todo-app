import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  

  #loader {
    /*
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    */
    margin-top: 50px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color:  ${props => props.theme.buttonColor};;
    border-right-color: ${props => props.theme.buttonColor};;
    animation: spin 2s linear infinite;
  }
 
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
