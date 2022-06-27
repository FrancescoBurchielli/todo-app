import {FC,useContext} from 'react'
import Logo from "../../assets/logo.svg"
import Logout from "../../assets/logOut.svg"
import { AuthContext } from '../../context/AuthContext'
import { Container } from './styles'

export const Navbar:FC<{}> = ({}) => {

  const {logoutUser} = useContext(AuthContext);

  return (
    <Container>
         <img id="logo" alt="logo" src={Logo}/>
         <img id="logOut" alt="logout" src={Logout} onClick={logoutUser}/>
    </Container>  
    
  )
}
