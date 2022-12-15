import React from "react";
import "./App.css";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Header from "./Components/Layout/Header/Header";
import { Redirect, Route } from "react-router-dom";
import SignIn from "./Components/Pages/SignIn/SignIn";
import Welcome from "./Components/Pages/Welcome/Welcome";
import IncompleteProfile from "./Components/Pages/IncompleteProfile/IncompleteProfile";
import { LoginContextProvider } from "./Components/Context/LoginContext";
import ForgotPassword from "./Components/Pages/ForgotPassword/ForgotPassword";

function App() {
  return (
    <React.Fragment>
      <LoginContextProvider>
        <Header></Header>
        {/* <Route path="*">
          <Redirect to="/signUp" />
        </Route> */}
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/signIn">
          <SignIn />
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/incompleteProfile">
          <IncompleteProfile />
        </Route>
        <Route path="/forgotPassword">
          <ForgotPassword />
        </Route>
      </LoginContextProvider>
    </React.Fragment>
  );
}
export default App;