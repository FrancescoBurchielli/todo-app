import {FC} from 'react'
import { TodoInterface } from '../../../../interfaces'
import { Container } from './styles'
import pinkTick from "../../../../assets/pinkTick.svg"
import whiteTick from "../../../../assets/whiteTick.svg"
import editTodo from "../../../../assets/editTodo.svg"
import removeTodoIcon from "../../../../assets/removeTodo.svg"
import { useNavigate } from 'react-router-dom'


interface TodoProps {
  todo:TodoInterface,
  toggleTodoComplete: (todo:TodoInterface) => void,
  removeTodo:(id: number) => void
}

export const Todo:FC<TodoProps> = ({todo,toggleTodoComplete,removeTodo}) => {

  const navigate = useNavigate();

  const handleCheckClick = () => {    
    toggleTodoComplete(todo);
  }

  const handleDeleteClick = () => {
    removeTodo(todo.id);
  }

  const handleEditClick = () => {
    navigate("/todo/update",{state:todo});
  }

  return (
    <Container>
      <img id="checkDone" onClick={handleCheckClick} alt="check" className="icon" src={todo.done?pinkTick:whiteTick}/>
      <p id={todo.done?"descriptionDone":""} className="description" >{todo.description}</p> 
      <img id="editTodo"  onClick={handleEditClick} alt="edit" className="icon" src={editTodo}/>
      <img id="removeTodo" onClick={handleDeleteClick} alt="remove" className="icon" src={removeTodoIcon}/>
    </Container>
  )
}
