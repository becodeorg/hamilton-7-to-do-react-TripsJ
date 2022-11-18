import React from 'react'
import Inputfield from './components/inputfield'
import TodoList from './components/todolist'
import Submitbutton from './components/submitbutton'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List </h1>

        </header>

        <Inputfield />
          <TodoList/>
        <Submitbutton/>
        </div>
  );
}

export default App;

// an input field to type new todos
// a submit button
// a list of todos (just add 2-3 todos)
// each todo has a checkbox next to it
