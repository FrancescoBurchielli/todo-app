import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { SignUpSuccess } from "../pages/SignUpSuccess"
import { SomethingWentWrong } from "../pages/SomethingWentWrong";

export const routes = [
    {    
        path: "/", element: <Home/>
    },
    {    
        path: "/sign-up", element: <SignUp />, 
    },
    {    
        path: "/sign-up-success", element: <SignUpSuccess/> 
    },
    {    
        path: "/sign-in", element: <SignIn/>
    },
    {    
        path: "/something-went-wrong", element: <SomethingWentWrong/>
    },    
];