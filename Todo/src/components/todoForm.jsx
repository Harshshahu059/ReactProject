import React from 'react'
import { useState } from 'react';
import { useTodoContext } from '../Todocontext/todoContext';

function TodoForm() {
    const{addTodo}=useTodoContext();
    const [task, settask] = useState("")

    const formSubmission=(e)=>{
        e.preventDefault();
        addTodo({
            id:Date.now(),
            completed:false,
            task
        })
        settask("");
    }

    return (
        <form  className="flex" onSubmit={formSubmission}>
            <input
                type="text"
                placeholder="Write Todo..."
                value={task}
                onChange={(e)=>settask(e.target.value)}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;