import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesLists.css";

function ExpensesLists(props) {
  /* let expensesContent = <p>no expenses</p>; */
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>;
  }
  return (
    <div className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
}
export default ExpensesLists;
