import { useContext } from "react";
import { createContext } from "react";

export const Todocontext=createContext({
   Todos:[ {
      id:1,      
      completed:false,
      task:"task msg...."
    }],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleTodo:(id)=>{}
});

export const TodoProvider=Todocontext.Provider;

export const useTodoContext=()=>{
    return useContext(Todocontext);
}

