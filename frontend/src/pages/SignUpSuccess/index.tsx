import { useNavigate } from "react-router-dom"
import { Container,TakeMeToSignInButton} from "./styles"
import Logo from "../../assets/logo.svg"
import { VeryBigText, SmallText } from "../../styles/components"

export const SignUpSuccess = () => {

  const navigate = useNavigate();

  return (
    <Container>
      <div id="logoAndMotto">
        <img id="logo" alt="logo" src={Logo}></img>
        <SmallText>get things done today</SmallText>
      </div>
      <VeryBigText>You've successfully signed up!</VeryBigText>
      <TakeMeToSignInButton onClick={()=>navigate("/sign-in")}>Take me to sign-in</TakeMeToSignInButton>
    </Container>
  )
}


