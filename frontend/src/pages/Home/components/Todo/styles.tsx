import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: ${props => props.theme.backgroundColorSecondary};
    color: white;
    margin: 20px 0px;
    #descriptionDone{
        text-decoration: line-through;
    }
    .icon{
        width: 30px;
        height: 30px;        
    }
    #editTodo, #removeTodo{
        width: 25px;
        height: 25px;
    }

`