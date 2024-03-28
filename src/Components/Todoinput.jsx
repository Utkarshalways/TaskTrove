import React from 'react'
import { useTodo } from '../context';
import { useState } from "react";
import "../Style/Todoinput.scss";

const Todoinput = () => {

   const {addTodo} = useTodo();
   const [todo, setTodo] = useState("")


   const add = (e) =>{

    e.preventDefault();

    //this function will add the todo
    if(todo.length > 0){
      
      // console.log(todo)
      addTodo({todo,complete:false});
    }else{
      alert("Please Enter the task in Todo!!")
    }
    setTodo("")

   }


  return (
    <form className="todoinputbase" onSubmit={add}>
      <input
        type="text"
        placeholder="add todo...."
        className="input"
        readOnly={false}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="addbutton"
      >
        <span class="material-symbols-outlined text-black">add</span>
      </button>
    </form>
  );
  
}

export default Todoinput