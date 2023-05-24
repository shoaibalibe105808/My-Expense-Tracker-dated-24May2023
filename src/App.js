import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

/*Updated by Shoaib for react conditional rendering

// In order to reach the App component, i have to reach to NewExpense
// component at a first step. It is the NewExpense component which uses
// the ExpenseForm. We can not skip components in between.

////////////      Assignment on conditional rendering     //////////////     
// Task 1: Show "Add New Expense" button only when the page loads
//solution: new button is created and make a condition on it.
// Task 2: When the button is clicked then the form will be opened
//solution: use states as false, button onclick function and turns true
// Task 3: Form should have two buttons, one is 'Cancel' and the other is 'Add Expense'
//solution: cancel button is onClick button, whereas 'Add Expense' is type='submit'
// Task 4: If the 'Cancel' button is clicked then form should be closed without
//         saving expense. But, if the 'Add Expense' is clicked then form
//         should aslo be closed with saving expense.
//solution: created newExpenseState in NewExpense.js. If the state is false then
//        only 'Add New Expense' button will be shown. If the state is true then 
//        <ExpenseForm> will be invoked
//        Because it is a toggle function so i used a callback function as prop
//        which will be triggered in <ExpenseForm>. If the cancel button is
//        clicked then formToggle to false and <NewExpense> state will be false,
//        hence form will be disappered and only 'Add New Expense' appears  
// Start Time: 11.00
// End Time: 12.00


import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
*/

/* Assignment on conditional rendering

import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isProtecting, setIsProtecting] = useState(false);
  let deleteButton = <button onClick={deletingFunction}>Delete</button>;
  let protectedMessage = <p></p>;
  let warningContent = (
    <div id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={proceedFunction}>Proceed</button>
      <button onClick={notProceedFunction}>No</button>
    </div>
  );
 
  function deletingFunction() {
    setIsDeleting(true);
  }
  function proceedFunction() {
    setIsDeleting(false);
  }
  function notProceedFunction() {
    console.log('No is executed');
    
    console.log(protectedMessage);
    setIsDeleting(false);
    setIsProtecting(true);
  }
 // true, then show warning box
  return <div>
  {isDeleting ? warningContent : deleteButton}
  {isProtecting? <h1>You were save before, Be careful for pressing above button</h1>:protectedMessage }

  </div>;
}
*/

/* Updated by Shoaib for react conditional rendering
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
// In order to reach the App component, i have to reach to NewExpense
// component at a first step. It is the NewExpense component which uses
// the ExpenseForm. We can not skip components in between.
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const App = () => {
  //const [data, setData] = useState(DUMMY_EXPENSES);
  // const callbackApp = (expense) => {
  //   setData((prevExpenses) => {
  //     return [expense, ...prevExpenses];
  //   });
  // };
  // console.log(data);

  //<NewExpense myApp={callbackApp} />
  const addExpenseHandler = (expense) => {
    //console.log("In App");
    //console.log(expense);
  };
  
  return (
    <div>
      
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={DUMMY_EXPENSES} />
    </div>
  );
};

export default App;

*/

/*
import React, { useState } from "react";
import './components/UserInteraction/styles.css';
//import Toolbar from "./components/UserInteraction/Toolbar";
import { sculptureList } from "./components/UserInteraction/data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const sculpture = sculptureList[index];// 0
  
  const hasNext = index < (sculptureList.length - 1); //true or false  

  const handleNextClick = () => {
    if (hasNext) {
      setIndex(index+1);
    } else {
      setIndex(0);
    }
  };
  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  const handleBackClick = () => {
    if(index===0){
      setIndex(11);
    }
    else {
      setIndex(index-1);
    } 
    
  }
  return (
    <section>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handleBackClick}>Back</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </section>
  );
}
*/
/*export default function App() {
  
const [data, setData] = useState('');

  let a=['hello', 'hej'];
  let output = [];
  const playMovie = () => {
    a.forEach((line, i)=>{
      output.push(<h1 key={i+'-text'}><b>{line}</b></h1>);
      setData(output);
    })
  };
  const uploadImage = () => {
    alert("Upload Image");
  };
  console.log(data);
  
  return (
    <div>
      <Toolbar onPlayMovie={playMovie} onUploadImage={uploadImage} />
      <article>
        {data}
      </article>
    </div>
  );
}
*/
/*
import FilerArray from "./components/Props/FilterArray";
import {people} from './components/Props/Data';

export default function ArrayList() {
  
  return (
    <section>
      <FilerArray people={people} />
    </section>
  );
}
*/
/*
import Item from "./components/Props/Item";
import NewExpense from './components/NewExpense/NewExpense';

let years = [
  "Jan",
  "Feb",
  "Marts",
  "April",
  "Maj",
  "Juni",
  "Juli",
  "Aug",
  "Sept",
  "Okt",
  "Nov",
  "Dec",
];
export default function ArrayList() {
  return (
    <section>
      <h1>Map function</h1>
      <ol>
        <Item years={years} startFrom={0} />
      </ol>
    </section>
  );
}
*/
