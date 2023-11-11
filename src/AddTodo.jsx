import React, { useState } from "react";
import { useTodoContext } from "./Context";

const AddTodo = () => {
  // Destructure addTodo directly from the context
  const { addTodo } = useTodoContext();
  // Initialize state for the input text
  const [text, setText] = useState("");
   const {A,setA,handleAdd}=useTodoContext();
   const {sum}=useTodoContext()
      
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if the trimmed text is not empty before adding a new task
    if (text.trim() !== "") {
      // Call the addTodo function from the context to add a new task
      addTodo(text);
      // Clear the input field after adding a task
      setA("bubun1")
    }  setText("");
    console.log(handleAdd)
    console.log(sum)
  };

  return (
    <>
      {/* Form to add a new task */}
      <form onSubmit={handleSubmit}>
        {/* Input field for entering the task */}
        <input
          type="text"
          value={text}
          // Update the text state as the user types
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />
        {/* Button to submit the form and add a new task */}
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default AddTodo;
