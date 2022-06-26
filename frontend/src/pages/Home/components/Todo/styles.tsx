import styled from "styled-components";

export const Container = styled.div`
    @media only screen and (min-width: 667px) {
        width: 30%;
    }
    width: 90%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${props => props.theme.backgroundColorMain};
    color: white;
    margin: 20px 0px;
    .description{
        min-width: 200px;
        width: 200px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
    }
    #descriptionDone{
        text-decoration: line-through;       
    }
    .icon{
        cursor: pointer;
        width: 30px;
        height: 30px;        
    }
    #editTodo, #removeTodo{
        width: 25px;
        height: 25px;
    }

`