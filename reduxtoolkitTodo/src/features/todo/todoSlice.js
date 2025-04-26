import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
            id:1,
            test:"hello world!"
        }]
}

export const todoSlice =createSlice({
    name:"todo",
    initialState,//above thing also write here
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
           state.todos.filter((todo)=>todo?.id!==action.payload)
        },
        // delete assignment
        // update assignment
    }
})


export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer