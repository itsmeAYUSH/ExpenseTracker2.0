import { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";
import classes from "./Header.module.css";

const Header = () => {
  const loginCtx = useContext(LoginContext);
  return (
    <header className={classes.Header}>
      <div>
        <h3>Expense Tracker</h3>
      </div>
      {!loginCtx.email && <Link to="/signUp">Sign Up</Link>}
      {!loginCtx.email && <Link to="/signIn">Sign In</Link>}
      {!!loginCtx.email && <Link to="/expenses">Expenses</Link>}
      {!!loginCtx.email && (
        <Link onClick={loginCtx.logout} to="/signIn">
          Logout
        </Link>
      )}
    </header>
  );
};
export default Header;
