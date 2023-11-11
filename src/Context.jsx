// TodoContext.js
import React, { createContext, useContext, useState } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [A,setA] = useState([])
   const [sum ,setSum]=useState([])
  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  


  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleComplete, A,setA,sum,setSum }}>
      {children}
    </TodoContext.Provider>
  );
};
