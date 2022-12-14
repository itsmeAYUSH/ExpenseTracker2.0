import { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";
import classes from "./Header.module.css";

const Header = () => {
  const visibleLogout = localStorage.getItem("Email");

  const loginCtx = useContext(LoginContext);
  return (
    <header className={classes.Header}>
      <div>
        <h3>Expense Tracker</h3>
      </div>
      <Link to="/signIn">Sign In</Link>
      <Link to="/items">Items</Link>
      {!!visibleLogout && <Link onClick={loginCtx.logout}>Logout</Link>}
    </header>
  );
};
export default Header;