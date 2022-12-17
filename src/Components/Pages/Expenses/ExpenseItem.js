// import { useContext } from "react";
// import ExpenseContext from "../../Context/ExpenseContext";
import { useDispatch,useSelector } from "react-redux";

const ExpenseItem = (props) => {
  // const expenseCtx = useContext(ExpenseContext);
  const expenses = useSelector((state) => state.expense.expenses);

  const deleteExpenseHandler = async (id) => {
    try {
      const response = await fetch(
        `https://expensetracker-f79f1-default-rtdb.firebaseio.com/expenses/${id}.json`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      props.getExpenseFetching();
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <ul>
      {expenses.map((expenseItem) => (
        <li key={expenseItem.id}>
          {expenseItem.money} {expenseItem.description} {expenseItem.category}
          <button
            onClick={props.editExpense.bind(
              null,
              expenseItem.id,
              expenseItem.money,
              expenseItem.description,
              expenseItem.category
            )}
          >
            Edit
          </button>
          <button onClick={deleteExpenseHandler.bind(null, expenseItem.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ExpenseItem;
