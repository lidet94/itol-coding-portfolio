// Statusboard.js
import React, { useState } from 'react'
import { Ticketinfo } from './component/Ticketinfo'
import completed from '../src/image/completed.png'
import inprogress from '../src/image/inprogress.webp'
import failed from '../src/image/failed.jpg'

const Statusboard = () => {

    const [completedCount, setCompletedcount] = useState(12)
    const [inprogressCount, setInprogresscount] = useState(4)
    const [failedCount, setFailedcount] = useState(1)

  return (
    <div className='status-board'>
      <Ticketinfo 
      status='completed' 
      count ={completedCount}
      onIncrease ={()=>{setCompletedcount(completedCount + 1)}}
      onDecrease ={()=>{setCompletedcount(completedCount - 1)}}
      onReset = {()=>{setCompletedcount(0)}}
      >
        <p>Ticket Completed</p>
        <img src={completed} width={200} height={200}></img>
      </Ticketinfo>

      <Ticketinfo 
      status='in-progress'
      count={inprogressCount}
      onIncrease ={()=>{setInprogresscount(inprogressCount + 1)}}
      onDecrease ={()=>{setInprogresscount(inprogressCount - 1)}}
      onReset = {()=>{setInprogresscount(0)}}
       >
        <p>Ticket In Progress</p>
         <img src={inprogress} width={200} height={200}></img>
      </Ticketinfo>

      <Ticketinfo 
      status='failed'
      count={failedCount}
      onIncrease ={()=>{setFailedcount(failedCount +1)}}
      onDecrease ={()=>{setFailedcount(failedCount - 1)}}
      onReset = {()=>{setFailedcount(0)}}
      >
        <p>Ticket Failed</p>
         <img src={failed} width={200} height={200}></img>
      </Ticketinfo>
    </div>
  )
}

export default Statusboard

// component/Ticketinfo.js

import React from 'react'

export const Ticketinfo = ({status, children, count, onIncrease, onDecrease, onReset}) => {
  return (
    <div className={status}>
      {children}
      <h2>{count}</h2>
     <button onClick={onIncrease}>Add +1 </button> 
      <button onClick={onDecrease}>Subtract - 1 </button> 
      <button onClick={onReset}>Reset to 0 </button> 
    </div>
  )
}

// App.css

status-board{
  display: flex;
  justify-content: space-around;
  padding: 20px;
  font-family: Arial, Helvetica, sans-serif;
}

.completed{
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  padding: 20px;
  text-align: center;
  width: 30%;
}
.in-progress{
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  width: 30%;
}
.failed{
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  width: 30%;
}
