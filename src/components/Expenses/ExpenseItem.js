import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import React, { useState } from "react";

//function ExpenseItem(props)
const ExpenseItem = (props) => {
  //const [title, setTitle] = useState(props.title); //to be used
  //title is current state
  //setTitle is function
  //let title = props.title;
  /*  const expenseDate = new Date(2023,1,24);
    const expenseTitle = `Car insurance`;
    const expenseAmount = 294.67; */
  //console.log(props.title);

  //moving to expensedate.js
  /* const month = props.date.toLocaleString('en-US',{month: 'long'});
    const day = props.date.toLocaleString('en-US',{day:'2-digit'});
    const year = props.date.getFullYear(); */
  /*  function clickHandler() {
    setTitle("Updated");
    console.log("Clicked!!");
    //title = "Updated!";
  } */
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      {/* in expensedate */}
      {/* <div>
                    <div className="month">{month}</div>
                    <div className="year">{year}</div>
                    <div className="date">{day}</div>
            </div>  */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>

        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/*     <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
