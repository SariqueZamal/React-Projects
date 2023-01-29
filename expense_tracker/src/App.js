import React, {useState} from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
  { id: 'e2', title: 'Mobile Recharge', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Petrol',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  }
];

const App = () => {

  const[expenses,setExpenses] = useState(DUMMY_EXPENSES);

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense,...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
