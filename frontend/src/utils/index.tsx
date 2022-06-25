 //function that checks if a string contains only white spaces
export const containsOnlyWhiteSpaces = (str:string):boolean => {
  return /^\s+$/.test(str)
}

//function that checks if a string contains only digits
export const containsOnlyDigits = (str:string):boolean => {
    return /^[0-9]+$/.test(str);
}
  