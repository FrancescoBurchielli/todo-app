import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    padding-top: 10px;
    padding-left: 20px;      
    width: 100%;  
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: ${props => props.theme.backgroundColorMain};    
    #logo{
        width: 100px;
        height: auto;
    }

`