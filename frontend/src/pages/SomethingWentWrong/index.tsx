import { useNavigate } from "react-router-dom"
import { Container,MessageText,TakeMeToSignInButton} from "./styles"
import SadPokemon from "../../assets/sadPokemon.png"

export const SomethingWentWrong = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <MessageText>Oops, something went wrong...</MessageText>
      <img id="image" src={SadPokemon}/>
      <TakeMeToSignInButton onClick={()=>navigate(-1)}>Try again</TakeMeToSignInButton>
    </Container>
  )
}


