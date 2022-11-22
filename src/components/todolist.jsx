import React from "react";
// let todo1 = new ToDo("My first todo");
// let todo2 = new ToDo ("My second todo");

export default function TodoList(props) {
  // const initialTodos = [todo1,todo2];
  //const [todos, setTodos] = useState(initialTodos);
  // The first one is the array that is being used, the second one is the name of the Method that triggers the update in react

  const handleChange = (elementId)  =>{
    const newToDo = props.todos.map((todo) => {
        if (todo.id === elementId){
            todo.complete = !todo.complete;
        } //this feels like it should be a method of my ToDo Class something along TD.reverseState()->return self
        return todo;
    });

    props.setTodos(newToDo);
  }

  return (

    <ul>
      {props.todos.map((todo) => (
        <li key={todo.id}>
          <input type="checkbox" id={todo.id} onChange={()=> {
            handleChange(todo.id);
          }}   /> {todo.text}
        </li>
      ))}
    </ul>
  );
}