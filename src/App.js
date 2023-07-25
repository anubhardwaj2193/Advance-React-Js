import ExpenseItem from "./components/Expenses/ExpenseItem";

const App =()=> {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      LocationOfExpenditure :'Delhi'
    },
    { id: "e2",
     title: "New TV",
      amount: 799.49,
       date: new Date(2021, 2, 12),
       LocationOfExpenditure :'Sydney'
   },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      LocationOfExpenditure :'New York'
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      LocationOfExpenditure :'Dubai'
    },
  ];

  const expenseItems = expenses.map((expense)=>{
    return <ExpenseItem 
    title ={expense.title}
    amount= {expense.amount}
    date ={expense.date}
    LocationOfExpenditure ={expense.LocationOfExpenditure}
    ></ExpenseItem>
  })
  

  return (
    <div>
      <h2>Let's get started!</h2>
     
        {expenseItems}
      
    </div>
  );
}

export default App;
