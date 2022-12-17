// import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthActions } from "../../Store/AuthReducer";
import { Link } from "react-router-dom";
// import LoginContext from "../../Context/LoginContext";
import classes from "./Header.module.css";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const expensesAmount = useSelector((state) => state.expense.expensesAmount);
  console.log(expensesAmount);

  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(AuthActions.logout());
  };
  return (
    <header className={classes.Header}>
      <div>
        <h3>Expense Tracker</h3>
      </div>
      {!isLoggedIn && <Link to="/signUp">Sign Up</Link>}
      {!isLoggedIn && <Link to="/signIn">Sign In</Link>}
      {!!isLoggedIn && <Link to="/expenses">Expenses</Link>}
      {!!isLoggedIn && (
        <Link onClick={logoutHandler} to="/signIn">
          Logout
        </Link>
      )}
      {!!isLoggedIn && expensesAmount > 1000 && (
        <button>Premium Account</button>
      )}
    </header>
  );
};
export default Header;
