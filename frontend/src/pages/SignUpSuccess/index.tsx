import { useNavigate } from "react-router-dom"
import { Container,MessageText,TakeMeToSignInButton} from "./styles"
import Success from "../../assets/success.png"

export const SignUpSuccess = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <MessageText>You've succesfully signed up!</MessageText>
      <img src={Success}/>
      <TakeMeToSignInButton onClick={()=>navigate("/sign-in")}>Take me to sign-in</TakeMeToSignInButton>
    </Container>
  )
}


