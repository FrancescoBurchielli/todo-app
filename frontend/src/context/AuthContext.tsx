import { FC, createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { refreshToken, signIn } from "../axios/fetches";

interface AuthTokens {
  access: string;
  refresh: string;
}

interface Context {
  user: any;
  authTokens: AuthTokens | null;
  setAuthTokens: React.Dispatch<React.SetStateAction<AuthTokens | null>>;
  logoutUser: () => void;
}

export const AuthContext = createContext<Partial<Context>>({});

export const AuthProvider: FC<{ children: any }> = ({ children }) => {
  const navigate = useNavigate();

  let [authTokens, setAuthTokens] = useState<AuthTokens | null>(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens")!)
      : null
  );
  let [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwt_decode(localStorage.getItem("authTokens")!)
      : null
  );

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/sign-in");
  };

  const contextData = {
    user,
    authTokens,
    setAuthTokens,
    logoutUser,
  };

  const updateToken = () => {
    console.log("updating token...");
    const token = authTokens?.refresh;
    if (token) {
      refreshToken(token)
        .then((response) => {
          localStorage.setItem("authTokens", JSON.stringify(response.data));
          setAuthTokens(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      navigate("/sign-in");
    }
  };

  useEffect(() => {
    let intervalTime = 1000 * 60 * 59;

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [authTokens]);

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
