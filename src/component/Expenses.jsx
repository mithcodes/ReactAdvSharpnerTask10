import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';

function Expenses(props) {
  const uniqueYears = Array.from(new Set(props.items.map((expense) => expense.date.getFullYear())));
  const [selectedYear, setSelectedYear] = useState(null);

  const yearChangeHandler = (event) => {
    const selectedYear = parseInt(event.target.value, 10);
    setSelectedYear(selectedYear);
    props.onFilter(selectedYear);
  };

  return (
    <div>
      <div>
        <label>Select Year:</label>
        <select value={selectedYear || ''} onChange={yearChangeHandler}>
          <option value="">All Years</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
