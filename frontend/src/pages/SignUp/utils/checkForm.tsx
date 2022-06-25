import { FormErrors, FormInfo } from "../../../interfaces";
import { containsOnlyWhiteSpaces,containsOnlyDigits } from "../../../utils";


export const checkForm = (formData: FormInfo): Partial<FormErrors> => { 

  const checkResult: Record<string, string> = {};
  //check data for email
  if (!formData.email || containsOnlyWhiteSpaces(formData.email)) {
    checkResult.email = "Please enter an email address.";
  }else if(!formData.email.includes("@")){
    checkResult.email = "Please enter a valid email address.";
  }

  //check data for password
  if (!formData.password || containsOnlyWhiteSpaces(formData.password)) {
    checkResult.password = "Please enter a valid password.";
  }else if(formData.password.length<8){
    checkResult.password = "Password must contain at least 8 characters.";
  }else if(containsOnlyDigits(formData.password)){
    checkResult.password = "Password cannot contains only digits.";
  }

  //check data for password repeat
  if (!formData.passwordRepeat || formData.passwordRepeat !== formData.password) {
    checkResult.passwordRepeat = "Password doesn't match.";
  }

  //check data for first name
  if (!formData.firstName || containsOnlyWhiteSpaces(formData.firstName)){
    checkResult.firstName = "Please enter your first name."
  }else if(formData.firstName.length > 150){
    checkResult.firstName = "First name too long (max lenght: 150 char.)."
  }

  //check data for last name
  if (!formData.lastName || containsOnlyWhiteSpaces(formData.lastName)){
    checkResult.lastName = "Please enter your last name."
  }else if(formData.lastName.length > 150){
    checkResult.lastName = "Last name too long (max lenght: 150 char.)."
  }

  return checkResult;
};
