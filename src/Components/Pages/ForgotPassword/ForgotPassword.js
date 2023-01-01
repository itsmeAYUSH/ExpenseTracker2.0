import { useRef, useState } from "react";
import Button from "../../Layout/UI/Button";
import Form from "../../Layout/UI/Form";

const ForgotPassword = () => {
  const forgotEmailRef = useRef("");
  const [successMessage, setSuccessMessage] = useState("");
  const forgotSubmitHandler = async (event) => {
    event.preventDefault();
    const forgotEmailValue = forgotEmailRef.current.value;
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBkbQXz7lJKNU-7T6SEpXkPqb22k2yINFg",
      {
        method: "POST",
        body: JSON.stringify({
          email: forgotEmailValue,
          requestType: "PASSWORD_RESET",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    if (response.ok) {
      console.log(data.email);
      setSuccessMessage("Sent verify mail to your account...");
    } else {
      setSuccessMessage(data.error.message);
    }
  };
  return (
    <Form onSubmit={forgotSubmitHandler}>
      <label>Enter registered email</label>
      <input
        id="forgotEmailId"
        type="text"
        placeholder="Email"
        ref={forgotEmailRef}
      ></input>
      <Button>Send Link</Button>
      {!!successMessage && <h4>{successMessage}</h4>}
    </Form>
  );
};

export default ForgotPassword;
