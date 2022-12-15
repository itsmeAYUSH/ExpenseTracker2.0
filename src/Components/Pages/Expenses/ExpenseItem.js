import { useContext } from "react";
import ExpenseContext from "../../Context/ExpenseContext";

const ExpenseItem = () => {
  const expenseCtx = useContext(ExpenseContext);

  return (
    <ul>
      {expenseCtx.expenses.map((expenseItem) => (
        <li key={expenseItem.id}>
          {expenseItem.money} {expenseItem.description} {expenseItem.category}
        </li>
      ))}
    </ul>
  );
};
export default ExpenseItem;
