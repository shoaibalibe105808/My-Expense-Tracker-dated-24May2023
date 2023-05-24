import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // false: only button is showing
  // true: form is opened
  const [newExpenseState, setNewExpenseState] = useState(false);
  
  function myNewExpense() {
    setNewExpenseState(true);
  }
  function newExpenseStateFunction(myState){
    setNewExpenseState(myState);
  }
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  //Show "Add New Expense" button only when the page loads
  if (newExpenseState === false) {
    return (
      <div className="new-expense">
        <button onClick={myNewExpense}>Add New Expense</button>
      </div>
    );
  }
  // if it is newExpenseState is true
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} formToggle={newExpenseStateFunction}/>
    </div>
  );
};
export default NewExpense;


/* Updated by Shoaib for react conditional rendering

import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [expenseFormData, setExpenseFormData] = useState('');
  // New Expense is a parent component of a ExpenseForm component.
  // Therefore, we create a callback function (onAddExpense) here in parent component
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setExpenseFormData(expenseData);
  };
  console.log(expenseFormData);
  props.onAddExpense(expenseFormData);
  //props.onAppExpenseData(expenseFormData);
  const [buttonPressed, setButtonPressed] = useState(false);

  const openClickHandler = () => {
    setButtonPressed(true);
  };
  const closeClickHandler = () => {
    setButtonPressed(false);
  };

  if (!buttonPressed) {
    // true
    return (
      <div className="new-expense">
        <button onClick={openClickHandler}>Create New Expense</button>
      </div>
    );
  }
  // child to parent communication
  const buttonPressedHandler = (status) => {
    setButtonPressed(status);
  };
  return (
    <div className="new-expense">
      

      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        closeForm={buttonPressedHandler}
      />
      <button onClick={closeClickHandler}>Exit Form</button>
    </div>
  );
};

export default NewExpense;
*/
