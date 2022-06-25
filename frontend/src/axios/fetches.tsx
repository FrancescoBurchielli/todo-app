import { AxiosResponse } from 'axios'
import { FormInfo } from '../interfaces'
import axios from './index'

export const signUp = async (data:FormInfo):Promise<AxiosResponse> => {
    const payload = {
        email: data.email,
        password: data.password,
        password2: data.passwordRepeat,
        first_name: data.firstName,
        last_name: data.lastName
    }
    return await axios.post("/register/",payload)
}

export const signIn = async (email:string,password:string):Promise<AxiosResponse> => {
    const payload = {
        email,
        password,
    }
    return await axios.post("/login/",payload)
}