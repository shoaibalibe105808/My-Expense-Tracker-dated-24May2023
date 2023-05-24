import React, { useState } from "react";
//import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
//import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChar";
// Rendering Lists according to Filter selection
// 1) To show only those ExpenseItem where date of the expense year is equal to filteredYear
// 2) When user submits form then data should be listed through ExpenseItem
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // callback that listens to child component (ExpensesFilter.js)

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log("In Expenses");
  console.log(filteredYear);
  let items = props.items;

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;




/*Updated by Shoaib for react conditional rendering
import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log("In Expenses");
  console.log(filteredYear);
  let items = props.items;

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear() === parseInt(filteredYear);
  });

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
*/


/* Updated by Shoaib for react conditional rendering

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
// Rendering Lists according to Filter selection
// 1) To show only those ExpenseItem where date is equal to filteredYear
// 2) When user fills form then data should be listed through ExpenseItem 
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");
  // callback that listens to child component (ExpensesFilter.js)
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  console.log("In Expenses");
  console.log(filteredYear);
  let items = props.items;
  
  const filteredArray = items.filter(item => 
    item.date.getFullYear() == filteredYear
  );
  
  //console.log(filteredArray);
  const listItems = filteredArray.map((item)=>{
    return <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id} />
  });
  console.log(listItems);
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {listItems}
          
      </Card>
    </div>
  );
};
export default Expenses;
*/
