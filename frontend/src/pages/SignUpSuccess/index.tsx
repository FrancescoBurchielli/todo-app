import { useNavigate } from "react-router-dom"
import { Container,TakeMeToSignInButton} from "./styles"
import Logo from "../../assets/logo.svg"
import { SmallText } from "../../styles/components"

export const SignUpSuccess = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <div id="logoAndMotto">
        <img id="logo" alt="logo" src={Logo}></img>
        <SmallText>get things done today</SmallText>
      </div>
      <h2 id="message">Hurray! You've succesfully signed up</h2>
      <TakeMeToSignInButton onClick={()=>navigate("/sign-in")}>Take me to sign-in</TakeMeToSignInButton>
    </Container>
  )
}


