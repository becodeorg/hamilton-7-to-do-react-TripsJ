import React, { useState } from 'react'
import Form from './components/form'
import TodoList from './components/todolist'
import ToDo from './components/todo'

let todo1 = new ToDo("My first todo");
let todo2 = new ToDo ("My second todo");

function App() {
  const initialTodos = [todo1,todo2];
  const [todos, setTodos] = useState(initialTodos);
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List </h1>

        </header>

        <Form setTodos={setTodos} todos={todos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
  );
}

export default App;

