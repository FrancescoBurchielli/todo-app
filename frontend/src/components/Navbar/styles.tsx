import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    position: fixed;
    padding: 10px 20px;   
    width: 100%;  
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: ${props => props.theme.backgroundColorSecondary};    
    #logo{
        width: 100px;
        height: auto;
    }
    #logOut{
        cursor: pointer;
        width: 35px;
        height: auto;
    }

`