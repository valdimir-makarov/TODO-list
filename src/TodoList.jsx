
 import React from "react"
 import "./App.css"
import { useTodoContext } from "./Context"
const TodoList =(id)=>{
    const {todos, addTodo, deleteTodo,A, toggleComplete,setSum} = useTodoContext()
     console.log(A) 
      const handleAdd=2+3;
      setSum(handleAdd)
    return(<>
       {
        todos.map((todo)=>(
          <li key={todo.id}>
              <span
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </span>

          <div className="this">
             <button onClick={() => toggleComplete(todo.id)}>
            {todo.completed ? 'Undo' : 'Complete'}
          </button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button></div>
         


          </li>
          
        
        ))
       }
    
    </>)



}
export default TodoList;