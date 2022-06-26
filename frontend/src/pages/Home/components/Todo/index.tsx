import {FC} from 'react'
import { TodoInterface } from '../../../../interfaces'
import { Container } from './styles'


export const Todo:FC<{todo:TodoInterface}> = ({todo}) => {
  return (
    <Container>
      {`${todo.id} ${todo.description}`} 
    </Container>
  )
}
