import React, { useContext } from "react";
import { useRef } from "react";
import { useHistory } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";
import classes from "./SignIn.module.css";

const SignIn = () => {
  const emailRef = useRef("");
  const pswdRef = useRef("");

  const history = useHistory("");

  const loginCtx = useContext(LoginContext);

  const signInSubmitHandler = async (event) => {
    event.preventDefault();

    const emailValue = emailRef.current.value;
    const pswdValue = pswdRef.current.value;

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBkbQXz7lJKNU-7T6SEpXkPqb22k2yINFg",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailValue,
          password: pswdValue,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data.email);

      emailRef.current.value = "";
      pswdRef.current.value = "";

      loginCtx.submitEmailToken(data.email, data.idToken);

      history.replace("/welcome");
    } else {
      alert(data.error.message);
    }
  };
  return (
    <form onSubmit={signInSubmitHandler} className={classes.signIn}>
    <div>
      <h3>Sign In</h3>
    </div>
    <div>
      <input
        id="emailId"
        placeholder="Email"
        type="text"
        ref={emailRef}
      ></input>
      <input
        id="passwordId"
        placeholder="Password"
        type="password"
        ref={pswdRef}
      />
    </div>
    <button>Sign In</button>
  </form>
);
};
export default SignIn;