import {FC,useEffect} from 'react'
import { TodoInterface } from '../../../../interfaces'
import { Container } from './styles'
import pinkTick from "../../../../assets/pinkTick.svg"
import whiteTick from "../../../../assets/whiteTick.svg"
import editTodo from "../../../../assets/editTodo.svg"
import removeTodo from "../../../../assets/removeTodo.svg"


export const Todo:FC<{todo:TodoInterface,toggleTodoComplete: (id:number) => void}> = ({todo,toggleTodoComplete}) => {

  const handleCheckClick = () => {
    console.log("clicked");
    toggleTodoComplete(todo.id);
  }

  return (
    <Container>
      <img id="checkDone" onClick={handleCheckClick} alt="check" className="icon" src={todo.done?pinkTick:whiteTick}></img>
      <p id={todo.done?"descriptionDone":""} >{todo.description}</p> 
      <img id="editTodo" alt="edit" className="icon" src={editTodo}></img>
      <img id="removeTodo" alt="remove" className="icon" src={removeTodo}></img>
    </Container>
  )
}
