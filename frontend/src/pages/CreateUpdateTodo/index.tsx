import { useState, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createTodo, updateTodo } from "../../axios/fetches";
import { Navbar } from "../../components/Navbar";
import { AuthContext } from "../../context/AuthContext";
import { CreateUpdateTodoErrors, TodoInterface } from "../../interfaces";
import {
  BigButton,
  ErrorMessage,
  Form,
  Input,
} from "../../styles/components";
import { Container } from "./styles";
import { checkForm } from "./utils/checkForm";

export const CreateUpdateTodo = () => {
  const { authTokens } = useContext(AuthContext);
  const navigate = useNavigate();
  const todoToBeUpdated: TodoInterface = useLocation().state as TodoInterface;

  const [description, setDescription] = useState<string>(
    todoToBeUpdated?.description || ""
  );
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
      if (authTokens && authTokens.access) {
        if (todoToBeUpdated) {
          updateTodo({ ...todoToBeUpdated, description }, authTokens.access)
            .then((response) => {
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        } else {
          createTodo(description, authTokens.access)
            .then((response) => {
              navigate("/");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      } else {
        navigate("/sign-in");
      }
    }
  };

  return (
    <>
      <Navbar />
      <Container>
        <Form onSubmit={onSubmitHandler}>
          <h2 id="message">
            {todoToBeUpdated
              ? "Update your description below"
              : "What else do you want to get done today?"}
          </h2>
          <Input
            id="newTodo"
            type="text"
            placeholder="type todo description here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onClick={() => {
              setCreateUpdateTodoError(undefined);
            }}
            aria-label="new-todo"
            autoComplete="off"
          ></Input>
          <ErrorMessage show={createUpdateTodoError !== undefined}>
            {createUpdateTodoError?.description
              ? createUpdateTodoError.description
              : "error placeholder"}
          </ErrorMessage>
          <BigButton type="submit">
            {todoToBeUpdated ? "Update todo" : "Add todo"}
          </BigButton>
        </Form>
      </Container>
    </>
  );
};
