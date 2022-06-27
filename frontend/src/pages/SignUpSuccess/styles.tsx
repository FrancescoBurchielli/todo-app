import styled from 'styled-components'
import { BaseButton } from '../../styles/components'


export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: ${props => props.theme.backgroundColorMain}; 

  #logoAndMotto{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    #logo{
    width: 200px;
    height: auto;
    margin-bottom: 10px;
    }
  }

  #message{
    color: white;
    text-align: center;
    margin: 30px 20px;
  }
  
`

export const TakeMeToSignInButton = styled(BaseButton)`
  width: 200px;   
  margin-top: 30px;
  padding: 20px 10px;
`