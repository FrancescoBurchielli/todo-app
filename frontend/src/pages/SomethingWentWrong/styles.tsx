import styled from 'styled-components'
import { BaseButton } from '../../styles/components'


export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #image{
    width: 300px;
    height: auto;
  }
`

export const MessageText = styled.h1`
    margin: 20px;
    text-align: center;
`


export const TakeMeToSignInButton = styled(BaseButton)`
  width: 200px;   
  margin-top: 30px;
  padding: 20px 10px;
`