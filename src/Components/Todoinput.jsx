import React from 'react'
import { useTodo } from '../context';
import { useState } from "react";

const Todoinput = () => {

   const {addTodo} = useTodo();
   const [todo, setTodo] = useState("")


   const add = (e) =>{

    e.preventDefault();

    //this function will add the todo
    if(todo.length > 0){
      // console.log(todo)
      addTodo({todo,complete:false});
    }
    setTodo("")

   }


  return (
    <form className=" w-full flex justify-center gap-6 " onSubmit={add}>
      <input
        type="text"
        placeholder="Add Todo....."
        className=" w-2/3  placeholder:text-center rounded-lg text-black"
        readOnly={false}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className=" border-2 bg-blue-400 p-2 rounded-lg hover:bg-blue-500 items-center "
      >
        <span class="material-symbols-outlined text-black">add</span>
      </button>
    </form>
  );
  
}

export default Todoinput