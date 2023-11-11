import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { TodoProvider } from "./Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </TodoProvider>
);
