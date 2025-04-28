import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/addTodo'
import Todos from './components/todo'
import { useSelector } from 'react-redux'

function App() {
  const todos =useSelector(state=>state.todos)//(state)=>state.todo
   
  return(
    <>
    <AddTodo/>
    {todos.map((todo)=>(
      <div key={todo.id+1}><Todos todo={todo}/></div>
    )
    )}
    </>
  )
}

export default App
