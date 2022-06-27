import { Route, Navigate } from 'react-router-dom'
import { FC,useContext } from 'react'
import {AuthContext} from '../../context/AuthContext'

export const PrivateRoute:FC<{children:any}> = ({children, ...rest}) => {
    let {authTokens} = useContext(AuthContext)
    /*
    return(
        <Route {...rest}>{!authTokens ? <Navigate to="/sign-in" /> :   children}</Route>
    )
    */
   if(!authTokens){
    return <Navigate to="/sign-in" replace />
   }
   return children;
}