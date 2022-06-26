import { AxiosResponse } from "axios";
import { FormInfo, TodoInterface } from "../interfaces";
import axios from "./index";

// API request to sign up
export const signUp = async (data: FormInfo): Promise<AxiosResponse> => {
  const payload = {
    email: data.email,
    password: data.password,
    password2: data.passwordRepeat,
    first_name: data.firstName,
    last_name: data.lastName,
  };
  return await axios.post("/register/", payload);
};

// API request to sign in
export const signIn = async (
  email: string,
  password: string
): Promise<AxiosResponse> => {
  const payload = {
    email,
    password,
  };
  return await axios.post("/login/", payload);
};

// API request to get all todos
export const getTodos = async (token: string): Promise<AxiosResponse> => {
  const headers = { Authorization: `Bearer ${token}` };
  const config = {
    headers,
  };
  return await axios.get("/todos/", config);
};

// API request to create a todo
export const createTodo = async (
  description: string,
  token: string
): Promise<AxiosResponse> => {
  const payload = {
    description,
  };
  const headers = { Authorization: `Bearer ${token}` };
  const config = {
    headers,
  };
  return await axios.post("/todos/", payload, config);
};

// API request to update a todo
export const updateTodo = async (todo:TodoInterface,token: string): Promise<AxiosResponse> => {
  const headers = { Authorization: `Bearer ${token}` };
  const payload = {
    description : todo.description,
    done : todo.done
  }  
  const config = {
    headers,
  };
  return await axios.put(`/todos/${todo.id}`, payload, config);
};

// API request to delete a todo
export const deleteTodo = async (id:number,token: string): Promise<AxiosResponse> => {
  const headers = { Authorization: `Bearer ${token}` };
  const config = {
    headers,
  };
  return await axios.delete(`/todos/${id}`, config);
};