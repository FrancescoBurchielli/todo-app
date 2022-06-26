import styled from "styled-components";

export const Container = styled.div`
    width: 100%;    
    height: 100%;
    padding-top:15%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.backgroundColorSecondary};      

`