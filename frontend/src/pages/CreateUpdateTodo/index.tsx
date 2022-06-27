import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../../axios/fetches";
import { Navbar } from "../../components/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { CreateUpdateTodoErrors } from "../../interfaces";
import {
  BigButton,
  BigText,
  ErrorMessage,
  Form,
  Input,  
} from "../../styles/components";
import { Container } from "./styles";
import { checkForm } from "./utils/checkForm";

export const CreateUpdateTodo = () => {

  const {authTokens} = useContext(AuthContext);
  const navigate = useNavigate();

  const [description, setDescription] = useState<string>("");
  const [createUpdateTodoError, setCreateUpdateTodoError] = useState<
    Partial<CreateUpdateTodoErrors> | undefined
  >();

  const onSubmitHandler = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    const errors = checkForm({
      description,
    });

    if (Object.keys(errors).length) {
      setCreateUpdateTodoError(errors);
    } else {
      if(authTokens && authTokens.access){
        createTodo(description,authTokens.access)
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
  };

  return (
    <>
      <Navbar />
      <Container>
        <Form onSubmit={onSubmitHandler}>
          <BigText>What else do you want to get done today?</BigText>
          <Input
            id="newTodo"
            type="text"
            placeholder="type todo descripton here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onClick={() => {
              setCreateUpdateTodoError(undefined);
            }}
            aria-label="new-todo"
            autoComplete="off"
          ></Input>
          <ErrorMessage show={createUpdateTodoError !== undefined}>
            {createUpdateTodoError?.description ? createUpdateTodoError.description : "error placeholder"}
          </ErrorMessage>
          <BigButton type="submit">Add todo</BigButton>
        </Form>
      </Container>
    </>
  );
};
