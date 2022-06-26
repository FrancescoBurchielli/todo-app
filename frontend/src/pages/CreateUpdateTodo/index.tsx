import { useState } from "react";
import { createTodo } from "../../axios/fetches";
import { Navbar } from "../../components/Navbar";
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
      createTodo(description)
      .then(response=>{
        console.log(response)
      })
      .catch(error => {
        console.log(error);
      })
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
