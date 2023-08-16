import React from 'react'

import React, { useState } from 'react';
import { addTodo } from '../redux/todoSlice/TodoSlice';
import { useDispatch } from 'react-redux';

const Task = () => {
  
    const [task, settask] = useState({
        id:null,
        name:""
    })
    const dispatch=useDispatch()

  return (
    
      <div>
      <h1>what you can do</h1>
      <input type='text' onChange={(e)=>(settask({...task,name:e.target.value}),settask({...task,id:Math.floor(Math.random() * 100)}))} ></input>
      <button onClick={()=> dispatch(addTodo(task))} >Add Task</button>
    </div>



     
  )
}

export default Task
