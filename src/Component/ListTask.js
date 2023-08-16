import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletetodo, edittodo } from '../redux/todoSlice/TodoSlice'

const ListTask = () => {
  
    
    
      <h1>My list</h1>
      const list=useSelector (state=>state.todo.todo)
    const dispatch=useDispatch()
    const [show, setshow] = useState (false)
    const [newt, setnewt] = useState({
        name:""
    })
  return (
    <div>
      {list.map((el)=>
      (
        <>
      <h1>{el.name}</h1> 
      <button onClick={()=>dispatch(deletetodo(el))}>DELETE</button> 
      <button onClick={()=>setshow(!show)}>EDIT</button>
      
      </>
      )
    )}
    {show ? (
        <>
      <input type='text' onChange={(e)=>setnewt({name:e.target.value})}/> 
      <button onClick={()=>dispatch(edittodo(newt))}>OK</button>
      </>
      )
      :null
      }

    </div>
  )
}

  

export default ListTask
