import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import addTodo from "../../assets/addTodo.svg";

export const AddTodo: FC<{}> = ({}) => {
  
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate("/todo/new");
  };

  return (
    <Container onClick={handleClick}>
      <img id="addTodo" src={addTodo} alt="add-todo"/>
    </Container>
  );
};
