import styled from "styled-components";

export const Container = styled.div`
    width: 100%;    
    flex-grow:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 100px;
    background: ${props => props.theme.backgroundColorMain};
    #welcomeSentence{      
        position: sticky;
        top: 100px;     
        font-size: 25px;
        font-weight: bold;
        padding: 0px 30px 30px 30px;
        margin: 0px;
        margin-bottom: 20px;
        color: white;
        text-align: center;        
        word-wrap: break-word;        
        background: ${props => props.theme.backgroundColorMain};
    }       

`