import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{
            id:1,
            text:"hello world!"
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
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            const {id,text}=action.payload
            state.todos=state.todos.map((todo)=>todo.id===id?{text:text}:todo)
        }
    }
})


export const {addTodo,removeTodo,updateTodo}=todoSlice.actions
export default todoSlice.reducer