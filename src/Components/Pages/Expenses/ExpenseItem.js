import { useContext } from "react";
import ExpenseContext from "../../Context/ExpenseContext";

const ExpenseItem = (props) => {
  const expenseCtx = useContext(ExpenseContext);

  return (
    <ul>
      {expenseCtx.expenses.map((expenseItem) => (
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
          <button onClick={expenseCtx.deleteExpense.bind(null, expenseItem.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
export default ExpenseItem;