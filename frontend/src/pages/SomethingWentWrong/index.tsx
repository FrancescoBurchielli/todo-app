import { useNavigate } from "react-router-dom"
import { Container,TakeMeToSignInButton} from "./styles"
import Logo from "../../assets/logo.svg"
import { SmallText } from "../../styles/components"

export const SomethingWentWrong = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <div id="logoAndMotto">
        <img id="logo" alt="logo" src={Logo}/>
        <SmallText>get things done today</SmallText>
      </div>
      <div>
        <h2 id="message">Oops..the stars aren't in our favour today.</h2>
        <h2 id="message">Mind signing in again?</h2>
      </div>
      <TakeMeToSignInButton onClick={()=>navigate("/sign-in")}>Take me to sign-in</TakeMeToSignInButton>
    </Container>
  )
}


