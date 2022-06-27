import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTodo, getTodos, updateTodo } from "../../axios/fetches";
import { AddTodo } from "../../components/AddTodo";
import { Loading } from "../../components/Loading";
import { Navbar } from "../../components/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { TodoInterface } from "../../interfaces";
import { BigText } from "../../styles/components";
import { Todo } from "./components/Todo";
import { Container } from "./styles";

export const Home = () => {
  
  const {authTokens} = useContext(AuthContext);
  const navigate = useNavigate();
  
  const [loading,setLoading] = useState<boolean>(true);
  const [todos, setTodos] = useState<Array<TodoInterface>>();

  useEffect(() => {
    if(authTokens && authTokens.access){
      getTodos(authTokens.access)
    .then(response=>{
      setTimeout(()=>{
        setTodos(response.data.sort((a:TodoInterface,b:TodoInterface)=>b.id - a.id))
        setLoading(false);
      },300);     
    })
    .catch(error => {
      console.log(error);
    })
    }else{
      navigate("/sign-in")
    }    
  }, [authTokens, navigate])
  


  const countPendingTodos = () => {
    const pendingTodos = todos?.filter(todo => todo.done === false);
    return pendingTodos?.length;
  }

  const getWelcomeSentence = () => {
    const pendingTodos = countPendingTodos();
    if(loading){
      return "Loading..."
    }
    if(pendingTodos===0){
      return "Looks like it's a chill day today. For the moment..."
    }else{
      return `You have ${pendingTodos} pending tasks. Let's get some work done!` 
    }
  }

  const toggleTodoComplete = (currentTodo: TodoInterface) => {    
    const newTodos = todos?.map((todo) => {
      if (todo.id === currentTodo.id) {
        todo.done = !todo.done;
      }
      return todo;
    });
    setTodos(newTodos);        
    if(authTokens && authTokens.access){
      updateTodo(currentTodo,authTokens.access)
    .then(response=>{
    })
    .catch(error => {
      console.log(error);
    })
    }else{
      navigate("/sign-in")
    }       
  };

  const removeTodo = (id: number) => {
    const newTodos = todos?.filter((todo) => {
        return todo.id !== id;
      });
    setTodos(newTodos); 
    if(authTokens && authTokens.access){
      deleteTodo(id,authTokens.access)
    .then(response=>{
      navigate("/");
    })
    .catch(error => {
      console.log(error);
    })
    }else{
      navigate("/sign-in")
    }   
  }

  return (
    <>
      <Navbar />
      <Container>
        <h2 id="welcomeSentence">
          {getWelcomeSentence()}
        </h2>
        {loading && <Loading/>}
        {todos && todos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodoComplete={toggleTodoComplete}
              removeTodo={removeTodo}
            />
          );
        })}
      </Container>
      {todos &&<AddTodo />}
    </>
  );
};
