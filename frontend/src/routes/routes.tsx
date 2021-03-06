import { PrivateRoute } from "../HOCs/privateRoute";
import { CreateUpdateTodo } from "../pages/CreateUpdateTodo";
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { SignUpSuccess } from "../pages/SignUpSuccess";
import { SomethingWentWrong } from "../pages/SomethingWentWrong";

export const routes = [
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-up/success",
    element: <SignUpSuccess />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: "/todo/new",
    element: (
      <PrivateRoute>
        <CreateUpdateTodo />
      </PrivateRoute>
    ),
  },
  {
    path: "/todo/update",
    element: (
      <PrivateRoute>
        <CreateUpdateTodo />
      </PrivateRoute>
    ),
  },
  {
    path: "/something-wrong",
    element: (      
        <SomethingWentWrong />      
    ),
  },  
];
