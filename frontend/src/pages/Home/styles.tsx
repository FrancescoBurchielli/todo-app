import styled from "styled-components";

export const Container = styled.div`
    width: 100%;    
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.backgroundColorMain};    
    #logo{
        width: 70px;
        height: auto;
    }

`