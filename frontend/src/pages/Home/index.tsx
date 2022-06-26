import { useState, useContext } from "react";
import { AddTodo } from "../../components/AddTodo";
import { Navbar } from "../../components/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { TodoInterface } from "../../interfaces";
import { BigText, VeryBigText } from "../../styles/components";
import { Todo } from "./components/Todo";
import { Container } from "./styles";

export const Home = () => {
  const sampleTodos: TodoInterface[] = [
    {
      id: 1,
      description: "clean house",
      done: true,
    },
    {
      id: 2,
      description: "do challenge",
      done: false,
    },
    {
      id: 3,
      description: "take bath",
      done: false,
    },
    {
      id: 4,
      description: "take bath",
      done: false,
    },
    {
      id: 5,
      description: "take bath",
      done: false,
    },
    {
      id: 6,
      description: "take bath",
      done: true,
    },
    {
      id: 7,
      description: "take bath",
      done: false,
    },
    {
      id: 8,
      description: "take bath",
      done: true,
    },
    {
      id: 9,
      description: "take bath",
      done: false,
    },
    {
      id: 10,
      description: "hsdhsahdshadsdsdsdssdsdsdsdsds",
      done: true,
    },
  ];

  const context = useContext(AuthContext);
  const [todos, setTodos] = useState<Array<TodoInterface>>(sampleTodos);

  const countPendingTodos = () => {
    const pendingTodos = todos.filter(todo => todo.done === false);
    return pendingTodos.length;
  }

  const getWelcomeSentence = () => {
    const pendingTodos = countPendingTodos();
    if(pendingTodos===0){
      return "Chill day today. For the moment..."
    }else{
      return `You have ${pendingTodos} pending tasks. Let's get some work done!` 
    }
  }

  const toggleTodoComplete = (id: number) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar />
      <Container>
        <VeryBigText>
          {getWelcomeSentence()}
        </VeryBigText>
        {todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodoComplete={toggleTodoComplete}
            />
          );
        })}
      </Container>
      <AddTodo />
    </>
  );
};
