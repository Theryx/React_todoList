import { useState } from "react";
import "./App.css";
//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setImputText];
  return (
    <div className="App">
      <header>
        <h1> Theryx Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
