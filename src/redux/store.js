import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import todoSlice  from './todoSlice/TodoSlice'


const store = configureStore({
  reducer: {todo:todoSlice},
});

export default store;