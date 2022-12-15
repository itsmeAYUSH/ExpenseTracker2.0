import React, { useRef, useState } from "react";
import Form from "../../Layout/UI/Form";
import ExpenseItem from "./ExpenseItem";

const Expenses = () => {
  const moneyRef = useRef("");
  const descRef = useRef("");
  const categoryRef = useRef("");
  const [expenseItem, setExpenseItem] = useState([]);
  const addExpenseHandler = (event) => {
    event.preventDefault();
    setExpenseItem([
      ...expenseItem,
      {
        money: moneyRef.current.value,
        description: descRef.current.value,
        category: categoryRef.current.value,
      },
    ]);
  };
  return (
    <React.Fragment>
      <h2>Expenses Page...</h2>
      <Form onSubmit={addExpenseHandler}>
        <div>
          <label htmlFor="moneyId">Money Spent</label>
          <input id="moneyId" type="number" ref={moneyRef}></input>
        </div>
        <div>
          <label htmlFor="descId">Description</label>
          <input id="descId" type="text" ref={descRef}></input>
        </div>
        <div htmlFor="categoryId">
          <select id="categoryId" ref={categoryRef}>
            <option value="Food">Food</option>
            <option value="Grocery">Grocery</option>
            <option value="Fuel">Fuel</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button>Add Expense</button>
      </Form>
      <ExpenseItem expenseItem={expenseItem} />
    </React.Fragment>
  );
};

export default Expenses;