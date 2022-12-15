import React, { useState } from "react";

const ExpenseContext = React.createContext({
  expenses: null,
  addExpense: () => {},
  getExpense: () => {},
});

export const ExpenseContextProvider = (props) => {
  const [expenses, setExpenses] = useState([]);

  const addExpenseHandler = (expenses) => {
    const addExpenseItem = async (expenses) => {
      try {
        const response = await fetch(
          "https://react-expense-tracker-27b38-default-rtdb.firebaseio.com/expenses.json",
          {
            method: "POST",
            body: JSON.stringify({
              money: expenses.money,
              description: expenses.description,
              category: expenses.category,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();

        getExpenseHandler();
      } catch (error) {
        alert(error.message);
      }
    };
    addExpenseItem(expenses);
  };

  const getExpenseHandler = () => {
    const getExpenseItem = async () => {
      try {
        const response = await fetch(
          "https://react-expense-tracker-27b38-default-rtdb.firebaseio.com/expenses.json",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        const itemsArray = Object.keys(data).map((expense) => {
          return {
            id: expense,
            money: data[expense].money,
            description: data[expense].description,
            category: data[expense].category,
          };
        });
        setExpenses(itemsArray);
      } catch (error) {
        alert(error.message);
      }
    };

    getExpenseItem();
  };

  const expenseContext = {
    expenses: expenses,
    addExpense: addExpenseHandler,
    getExpense: getExpenseHandler,
  };
  return (
    <ExpenseContext.Provider value={expenseContext}>
      {props.children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseContext;