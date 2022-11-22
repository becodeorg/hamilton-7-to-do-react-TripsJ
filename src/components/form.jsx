// Need tu assemble the button and the textfield in one component
import React, { useRef } from "react";
import ToDo from "./todo";
// iimport useRef so i can well use a Ref
//Ref is the react way of interacting with the DOM


function Form (props){
    const inputRef = useRef();
    function clickHandler(){
        const inputElement = inputRef.current;
        const currentTodos = [...props.todos];
        const newEntry = new ToDo(inputElement.value)
                currentTodos.push(newEntry);
        

        
        props.setTodos(currentTodos)

    }
    
    
    return (

    <div>
        <input ref={inputRef} type="text"/> 
        <button onClick={clickHandler}>Add Task</button>
    </div>
)} 
export default Form;
