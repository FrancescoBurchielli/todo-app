import {useContext} from 'react'
import { AuthContext } from "../../context/AuthContext" 

export const Home = () => {

  const context = useContext(AuthContext);
  console.log(context);


  return (
    <div>I'll store your todos!</div>
  )
}
