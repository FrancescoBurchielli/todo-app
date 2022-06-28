import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    position: sticky;
    top: 0;  
    width: 100%;
    min-height: 100px;  
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: none;
    background: ${props => props.theme.backgroundColorMain};    
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