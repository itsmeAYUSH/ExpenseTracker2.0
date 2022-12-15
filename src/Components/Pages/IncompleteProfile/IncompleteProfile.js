// import classes from "./IncompleteProfile.module.css";
import React, { useContext, useEffect, useState } from "react";
import { useRef } from "react";
import LoginContext from "../../Context/LoginContext";
import Form from "../../Layout/UI/Form";

const IncompleteProfile = () => {
  const [displayNameValue, setDisplayNameValue] = useState("");
  const [photoUrlValue, setPhotoUrlValue] = useState("");
  const fullNameRef = useRef("");
  const photoRef = useRef("");

  const loginCtx = useContext(LoginContext);

  const updateDetailsHandler = async (event) => {
    event.preventDefault();

    const fullName = fullNameRef.current.value;
    const photoUrl = photoRef.current.value;
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBkbQXz7lJKNU-7T6SEpXkPqb22k2yINFg",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: loginCtx.idToken,
          displayName: fullName,
          photoUrl: photoUrl,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();

    if (response.ok) {
      console.log(data);

      fullNameRef.current.value = "";
      photoRef.current.value = "";
    } else {
      alert(data.error.message);
    }
  };
  useEffect(() => {
    const fillInputsHandler = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBkbQXz7lJKNU-7T6SEpXkPqb22k2yINFg",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: loginCtx.idToken,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        setDisplayNameValue(data.users[0].displayName);
        setPhotoUrlValue(data.users[0].photoUrl);
      } else {
        alert(data.error.message);
      }
    };
    fillInputsHandler();
  }, []);

  return (
    <React.Fragment>
      <h1>Profile Incomplete Page</h1>
      <Form
        onSubmit={updateDetailsHandler}
      >
        <h3>Contact Details</h3>
        <div>
          <input
            placeholder="Full Name"
            input="text"
            ref={fullNameRef}
            defaultValue={displayNameValue}
          />
          <input
            placeholder="Profile Photo URL"
            input="text"
            ref={photoRef}
            defaultValue={photoUrlValue}
          />
        </div>
        <button>Update Details</button>
      </Form>
    </React.Fragment>
  );
};

export default IncompleteProfile;
