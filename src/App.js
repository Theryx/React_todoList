import { useState } from "react";
import "./App.css";
//Importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setImputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1> Theryx Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setImputText={setImputText}
      />
      <TodoList todos={todos} inputText={inputText} />
    </div>
  );
}

export default App;
