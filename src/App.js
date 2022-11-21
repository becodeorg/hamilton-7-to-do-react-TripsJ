import React from 'react'
import Form from './components/form'
import TodoList from './components/todolist'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List </h1>

        </header>

        <Form/>
        <TodoList/>
      </div>
  );
}

export default App;

// an input field to type new todos
// a submit button
// a list of todos (just add 2-3 todos)
// each todo has a checkbox next to it
