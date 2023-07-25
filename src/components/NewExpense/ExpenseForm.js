import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = ()=>{

    
const [enteredTitle,setEnteredTitle] = useState('')
const [enteredAmount,setEnteredAmount] = useState('')
const [enteredDate,setEnteredtDate] = useState('');
const titleChangeHandler = (event)=>{
    setEnteredTitle(event.target.value)
}
const amountChangeHandler = (event)=>{
    setEnteredAmount(event.target.value)
}
const dateChangeHandler = (event)=>{
    setEnteredtDate(event.target.value)
}

const submitHandler = (event)=>{
event.preventDefault();

const expenseData = {
   title:enteredTitle,
   amount:enteredAmount,
   date: new Date(enteredDate)
}

console.log(expenseData)
}
    
// const [userInput,setUserInput] =useState({
//     enteredTitle: '',
//     enteredAmount: '',
//     enteredDate : ''
// })

// const titleChangeHandler = (event)=>{
//     setUserInput({
//         ...userInput,
//         enteredTitle:event.target.value
//     })

//     setUserInput((prevState)=>{
//         return {...prevState,enteredTitle:event.target.value}
//     })
// }

// const amountChangeHandler = (event)=>{
//     setUserInput({
//         ...userInput,
//         enteredAmount:event.target.value
//     })
// }

// const dateChangeHandler = (event)=>{
//     setUserInput({
//         ...userInput,
//         enteredDate:event.target.value
//     })
// }
return (

    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
            <label>Title</label>
            <input onChange={titleChangeHandler} type='text'/>
            </div>

            <div className='new-expense__control'>
            <label>Amount</label>
            <input onChange={amountChangeHandler} type='number' min='0.01' step="0.01"/>
            </div>

            <div className='new-expense__control'>
            <label>date</label>
            <input onChange={dateChangeHandler} type='date' min="2019-01-01" max="2024-01-01"/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type ="submit">Add Expense</button>
        </div>
    </form>
)
}

export default ExpenseForm;