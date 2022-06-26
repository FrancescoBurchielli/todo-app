import {FC} from 'react'
import Logo from "../../assets/logo.svg"
import { Container } from './styles'

export const Navbar:FC<{}> = ({}) => {
  return (
    <Container>
         <img id="logo" src={Logo}></img>
    </Container>  
    
  )
}
