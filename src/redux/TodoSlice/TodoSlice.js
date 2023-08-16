import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todo: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo : (state,action) =>{
state=state.todo.push(action.payload)
    },
    deletetodo:(state,action)=>{
return  (
    state=state.todo.filter((el)=>el.name!=action.payload.name)
)

    },
    edittodo:(state,action)=>{
        return(
            state=state.todo.map((el)=>(el.name==action.payload.name ? action.payload : el))
        )
    }
  },
})


export const { addTodo ,deletetodo, edittodo} = todoSlice.actions

export default todoSlice.reducer