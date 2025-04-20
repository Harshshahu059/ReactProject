import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/todoForm'
import TodoItem from './components/todoItem'
import { TodoProvider } from './Todocontext/todoContext'


function App() {
  const[Todos,setTodos]=useState([]);

  useEffect(() => {
    const Todo=JSON.parse(localStorage.getItem("Todo"))
    if(Todo&&Todo.length>0){
      setTodos(Todo)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("Todo", JSON.stringify(Todos));
  }, [Todos])
  
  const addTodo=(todo)=>{
    setTodos([...Todos,todo])  
  }
  const updateTodo=(id,todoMsg)=>{
    setTodos((prev)=>prev.map((todo)=>todo.id===id?{...todo,task:todoMsg}:todo))
  }
  const deleteTodo=(id)=>{
     setTodos((prev)=>prev.filter((todo)=>todo.id!==id))
  }
  const toggleTodo=(id)=>{
    setTodos((prev)=>prev.map((todo)=>todo.id===id?{...todo,completed: !todo.completed}:todo))    
  }

  return (
  <TodoProvider value={{Todos,addTodo,toggleTodo,updateTodo,deleteTodo}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                       <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                      {
                        Todos.map((todo)=>(
                          <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                          </div>
                        ))
                      }
                    </div>
                </div>
            </div>
  </TodoProvider>
  )
}

export default App