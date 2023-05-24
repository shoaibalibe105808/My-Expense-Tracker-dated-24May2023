import React from "react";
import './ExpenseDate.css';
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;

/*
import React from "react";

import "./ExpenseDate.css";
const ExpenseDate = (props) => {
  const myDate = props.myDate;
  
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const year = myDate.getFullYear();
  
  const month = monthNames[myDate.getMonth()];
  const day = myDate.getDate();
  
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}; // component ended here
export default ExpenseDate;





// import React from "react";
// import './ExpenseDate.css';

// const ExpenseDate = (props) => {
//   let md = props.myDate;
//   //let month = myDate.toLocaleString("en-US", { month: "long" });
//   let enumMonth = {
//     0: "Jan",
//     1: "Feb",
//     2: "Mar",
//     3: "April",
//     4: "May",
//     5: "June",
//     6: "July",
//     7: "Aug",
//     8: "Sept",
//     9: "Oct",
//     10: "Nov",
//     11: "Dec",
//   };
//   let month = enumMonth[md.getMonth()];
//   let year = md.getFullYear();
//   let day = md.getDate();
//   return (
//     <div className="expense-date">
//       <div className="expense-date__month">{month}</div>
//       <div className="expense-date__year">{year}</div>
//       <div className="expense-date__day">{day}</div>
//     </div>
//   );
// };

// export default ExpenseDate;

*/
