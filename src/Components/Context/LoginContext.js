import React, { useState } from "react";

const LoginContext = React.createContext({
  email: null,
  idToken: null,
  login: () => {},
  logout: () => {},
});

export const LoginContextProvider = (props) => {
  const [email, setEmail] = useState(localStorage.getItem("emailId"));
  const [idToken, setIdToken] = useState(localStorage.getItem("idToken"));

  const loginHandler = (email, idToken) => {
    setEmail(email);
    setIdToken(idToken);

    localStorage.setItem("EmailId", email);
    localStorage.setItem("idToken", idToken);
  };
  const logoutHandler = () => {
    setEmail(null);
    setIdToken(null);

    localStorage.removeItem("emailId");
    localStorage.removeItem("idToken");
  };
  const loginContext = {
    email: email,
    idToken: idToken,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
