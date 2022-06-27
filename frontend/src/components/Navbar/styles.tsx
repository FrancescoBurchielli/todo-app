import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    position: sticky;
    top: 0;
    padding: 40px 20px;   
    width: 100%;  
    height: 150px;
    display: flex;
    justify-content: space-between;
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