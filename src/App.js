import ExpenseItems from './components/ExpenseItem';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: '344.55',
      date: new Date(2021, 7, 5),
    },
    {
      id: 'e2',
      title: 'Daraz Shopping',
      amount: '144.55',
      date: new Date(2020, 4, 5),
    },
    {
      id: 'e3',
      title: 'New Laptop',
      amount: '444.35',
      date: new Date(2021, 8, 5),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItems>
      <ExpenseItems
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItems>
    </div>
  );
}

export default App;
