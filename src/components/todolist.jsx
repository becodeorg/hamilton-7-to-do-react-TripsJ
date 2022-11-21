import React, { useState } from "react";
import ToDo from "./todo";
let todo1 = new ToDo("My first todo");
let todo2 = new ToDo ("My second todo");

export default function TodoList() {
  const initialTodos = [todo1,todo2];
  const [todos, setTodos] = useState(initialTodos);

  const handleChange = (elementId)  =>{
    const newToDo = todos.map((todo) => {
        if (todo.id === elementId){
            todo.complete = !todo.complete;
        }
        return todo;
    });

    setTodos(newToDo);
  }

  return (

    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" id={todo.id} onChange={()=> {
            handleChange(todo.id);
          }}   /> {todo.text}
        </li>
      ))}
    </ul>
  );
}