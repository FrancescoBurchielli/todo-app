import { FormErrors, FormInfo } from "../../../interfaces";
import { containsOnlyWhiteSpaces } from "../../../utils";

export const checkForm = (formData: Partial<FormInfo>): Partial<FormErrors> => { 

  const checkResult: Record<string, string> = {};
  //check data for email
  if (!formData.email || containsOnlyWhiteSpaces(formData.email)) {
    checkResult.email = "Please enter an email address.";
  }else if(!formData.email.includes("@")){
    checkResult.email = "Please enter a valid email address.";
  }

  //check data for password
  if (!formData.password || containsOnlyWhiteSpaces(formData.password)) {
    checkResult.password = "Please enter a password.";
  }
  return checkResult;
};
