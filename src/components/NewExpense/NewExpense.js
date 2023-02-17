import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setisEditing(false);
  };

  const [isEditing, setisEditing] = useState(false);

  const startEditingHandler = () => {
    setisEditing(true);
  };

  const endEditing = () => {
    setisEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={endEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;

// import React from "react";
// import "./NewExpense.css";
// import "./ExpenseForm.js";
// import ExpenseForm from "./ExpenseForm.js";
// const NewExpense = function NewExpense(props) {
//   const saveExpenseHandler = (enteredexpense) => {
//     const expense = {
//       ...enteredexpense,
//       id: Math.random().toString(),
//     };
//     console.log(expense);
//     props.onexpense(expense);
//   };

//   return (
//     <div className=" new-expense">
//       <ExpenseForm onSaveExpense={saveExpenseHandler}></ExpenseForm>

//       {/* splitting in multiple forms */}
//     </div>
//   );
// };

// export default NewExpense;
