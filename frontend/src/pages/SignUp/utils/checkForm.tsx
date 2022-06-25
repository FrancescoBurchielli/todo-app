import { FormErrors, FormInfo } from "../../interfaces";

export const checkForm = (formData:FormInfo):Partial<FormErrors> => {
    const result: Record<string,string> = {};
    result.email = "email too long"
    result.passwordRepeat = "password doesn't match"
    return result;

}