import { FC,createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'


interface AuthTokens {
    access:string,
    refresh:string,
}

interface Context {
    user:any,
    authTokens:AuthTokens|null,
    setAuthTokens:React.Dispatch<React.SetStateAction<AuthTokens|null>>,
    logoutUser:()=>void,
}


export const AuthContext = createContext<Partial<Context>>({});


export const AuthProvider: FC<{children:any}> = ({children}) => {
    const navigate = useNavigate();

    let [authTokens, setAuthTokens] = useState<AuthTokens|null>(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')!) : null)
    let [user, setUser] = useState(()=> localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')!) : null)
    let [loading, setLoading] = useState<boolean>(false)

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        navigate('/login')
    }

    const contextData = {
        user,
        authTokens,
        setAuthTokens,
        logoutUser,
    }

  
    return(
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )

}
