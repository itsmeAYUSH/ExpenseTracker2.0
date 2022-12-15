import React from "react";
import "./App.css";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Header from "./Components/Layout/Header/Header";
import { Redirect, Route } from "react-router-dom";
import SignIn from "./Components/Pages/SignIn/SignIn";
import Welcome from "./Components/Pages/Welcome/Welcome";
import IncompleteProfile from "./Components/Pages/IncompleteProfile/IncompleteProfile";
import LoginContext from "./Components/Context/LoginContext";
import ForgotPassword from "./Components/Pages/ForgotPassword/ForgotPassword";
import { useContext } from "react";
import Expenses from "./Components/Pages/Expenses/Expenses";
import { ExpenseContextProvider } from "./Components/Context/ExpenseContext";

function App() {
  const loginCtx = useContext(LoginContext);
  const isLoggedIn = loginCtx.isLoggedIn;
  return (
    <React.Fragment>
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
      <ExpenseContextProvider>
        <Route path="/expenses">
          {isLoggedIn ? <Expenses /> : <Redirect to="/signIn" />}
        </Route>
      </ExpenseContextProvider>
    </React.Fragment>
  );
}
export default App;
