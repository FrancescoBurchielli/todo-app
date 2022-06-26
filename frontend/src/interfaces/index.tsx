export interface FormInfo {
    email: string|undefined,
    password: string|undefined,
    passwordRepeat: string|undefined,
    firstName: string|undefined,
    lastName: string|undefined,
}


export interface FormErrors {
    email: string|undefined,
    password: string|undefined,
    passwordRepeat: string|undefined,
    firstName: string|undefined,
    lastName: string|undefined,
}

export interface TodoInterface{
    id: number,
    description: string,
    done: boolean,
}