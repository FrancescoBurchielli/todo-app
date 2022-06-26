import {useState,useContext} from 'react'
import { Navbar } from '../../components/Navbar';
import { AuthContext } from "../../context/AuthContext" 
import { TodoInterface } from '../../interfaces';
import { Todo } from './components/Todo';
import { Container } from './styles';





export const Home = () => {

  const sampleTodos: TodoInterface[] = [{
    id:1,
    description: "clean house",
    done: false
  },
  {
    id:2,
    description: "do challenge",
    done: false

  },
  {
    id:3,
    description: "take bath",
    done: true
  },
  {
    id:4,
    description: "take bath",
    done: true
  },
  {
    id:5,
    description: "take bath",
    done: true
  },
  {
    id:6,
    description: "take bath",
    done: true
  },
  {
    id:7,
    description: "take bath",
    done: true
  },
  {
    id:8,
    description: "take bath",
    done: true
  },
  {
    id:9,
    description: "take bath",
    done: true
  },
  {
    id:10,
    description: "take bath",
    done: true
  }]


  const context = useContext(AuthContext);
  const [todos,setTodos] = useState<Array<TodoInterface>>(sampleTodos)


  return (
    <>
    <Navbar/>
    <Container>   
    {todos.map(todo => {
      return <Todo key={todo.id} todo={todo}/>

    })}
    </Container>
    </>
  )

}
