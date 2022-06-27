import { CreateUpdateTodo } from "../pages/CreateUpdateTodo";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { SignUpSuccess } from "../pages/SignUpSuccess"

export const routes = [
    {    
        path: "/", element: <Home/>
    },
    {    
        path: "/todo/new", element: <CreateUpdateTodo/>
    },
    {    
        path: "/todo/update", element: <CreateUpdateTodo/>
    },
    {    
        path: "/sign-up", element: <SignUp />, 
    },
    {    
        path: "/sign-up/success", element: <SignUpSuccess/> 
    },
    {    
        path: "/sign-in", element: <SignIn/>
    },   
];