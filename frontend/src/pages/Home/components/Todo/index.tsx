import {FC} from 'react'
import { TodoInterface } from '../../../../interfaces'
import { Container } from './styles'
import pinkTick from "../../../../assets/pinkTick.svg"
import whiteTick from "../../../../assets/whiteTick.svg"
import editTodo from "../../../../assets/editTodo.svg"
import removeTodoIcon from "../../../../assets/removeTodo.svg"


interface TodoProps {
  todo:TodoInterface,
  toggleTodoComplete: (todo:TodoInterface) => void,
  removeTodo:(id: number) => void
}


export const Todo:FC<TodoProps> = ({todo,toggleTodoComplete,removeTodo}) => {


  const handleCheckClick = () => {    
    toggleTodoComplete(todo);
  }

  const handleDelete = () => {
    removeTodo(todo.id);
  }

  return (
    <Container>
      <img id="checkDone" onClick={handleCheckClick} alt="check" className="icon" src={todo.done?pinkTick:whiteTick}></img>
      <p id={todo.done?"descriptionDone":""} className="description" >{todo.description}</p> 
      <img id="editTodo" alt="edit" className="icon" src={editTodo}></img>
      <img id="removeTodo" onClick={handleDelete} alt="remove" className="icon" src={removeTodoIcon}></img>
    </Container>
  )
}
