import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesLists from "./ExpensesLists";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //this remains here , filetrimg code
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //for filterring by year

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        {/*     {expensesContent} */}
        <ExpensesLists items={filteredExpenses}></ExpensesLists>
      </Card>
    </div>
  );
};

export default Expenses;

// import "./Expenses.css";
// import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
// import ExpensesFilter from "./ExpenseFilter";
// import { useState } from "react";

// function Expenses(props) {
//   const [filter, setFilter] = useState(2020);
//   const filterChange = (selectedYear) => {
//     setFilter(selectedYear);
//   };
//   return (
//     <Card>
//       <div className="expense">
//         <ExpensesFilter
//           selected /* anyname , two way binding, to send filter data back to expernsefilter*/={
//             filter
//           }
//           onChangeFilter={filterChange}
//         ></ExpensesFilter>
//         {props.items.map((expense) => (
//           <ExpenseItem
//             title={expense.title}
//             amount={expense.amount}
//             date={expense.date}
//           ></ExpenseItem>
//         ))}
//         {/* <ExpenseItem
//           title={props.expenses[0].title}
//           amount={props.expenses[0].amount}
//           date={props.expenses[0].date}
//         ></ExpenseItem>
//         <ExpenseItem
//           title={props.expenses[1].title}
//           amount={props.expenses[1].amount}
//           date={props.expenses[1].date}
//         ></ExpenseItem>
//         <ExpenseItem
//           title={props.expenses[2].title}
//           amount={props.expenses[2].amount}
//           date={props.expenses[2].date}
//         ></ExpenseItem>
//         <ExpenseItem
//           title={props.expenses[3].title}
//           amount={props.expenses[3].amount}
//           date={props.expenses[3].date}
//         ></ExpenseItem> */}
//       </div>
//     </Card>
//   );
// }

// export default Expenses;
