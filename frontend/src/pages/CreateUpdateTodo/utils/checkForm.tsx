import {
  CreateUpdateTodoErrors,
  CreateUpdateTodoInterface,
} from "../../../interfaces";
import { containsOnlyWhiteSpaces } from "../../../utils";

export const checkForm = (
  formData: CreateUpdateTodoInterface
): Partial<CreateUpdateTodoErrors> => {
  const checkResult: Record<string, string> = {};
  
  //check data for description
  if (!formData.description || containsOnlyWhiteSpaces(formData.description)) {
    checkResult.description = "Please enter a valid description";
  } else if (formData.description.length > 30) {
    checkResult.description = "Description too long (max 30 char.)";
  }
  return checkResult;
};
