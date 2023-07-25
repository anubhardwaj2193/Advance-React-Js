import React,{useState} from 'react';
import ExpenseDetails from './ExpenseDetails';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {


  const [title,setTitle] = useState(props.title)

 const clickedHandler =()=>{
  setTitle('Updated')
 }


 const [amount,setAmount] = useState(props.amount)

 const amountHandler =()=>{
  setAmount('100')
 }

 
  return (
    
    <Card className='expense-item'>
      
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickedHandler}>Change Title</button>
      <button onClick={amountHandler}>Change Price</button>
    </Card>
  );
}

export default ExpenseItem;
