import React, { useContext } from "react";
import { TodoProvider, useTodoContext } from "./Context";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import  "./App.css"
function App() {
  const { name } = useTodoContext();
  const {todos} = useTodoContext()
console.log(todos)
  return (

    <div className="this">
      <TodoProvider>
<AddTodo></AddTodo>
   <TodoList></TodoList>
</TodoProvider>
    </div>
   
 
  );
}

export default App;
