import React, { useState } from 'react'
import { useTodo } from '../context';

const Todos = ({todo}) => {
  const [Editable, setEditable] = useState(false);
  const [todomsg, setTodomsg] = useState(todo.todo);
  const {deleteTodo, updateTodo,togglecomplete} = useTodo();

  // togglecomplete = () => {


  // }

  const edit = ()=> {
    updateTodo(todo.id,{...todo,todo:todomsg})
    setEditable(false);
  }

  const togglecompleted = () => {
    togglecomplete(todo.id);
  }



  return (
    <div
      className={
        "  w-full flex justify-center gap-6 p-4 bg-slate-600 rounded-lg  " 
        // (complete ? "bg-green-500  " : "")
      }
    >
      <input type="checkbox" 
      value={todo.complete} 
        onChange={togglecompleted}
      />
      <input
        type="text"
        className={
          " w-2/3  placeholder:text-center rounded-lg  " 
          // (complete ? " line-through " : "")
        }
        value={todomsg}
        readOnly={!Editable}
        onChange={(e)=> setTodomsg(e.target.value)}
      />

      <button
        className=" border-2 bg-blue-400 p-2 rounded-lg hover:bg-blue-500 text-white"
        onClick={(e) => {
          setEditable(!Editable);
        }}

      >
        Edit
      </button>
      <button
        className=" border-2 bg-blue-400 p-2 rounded-lg hover:bg-blue-500 text-white "
        onClick={() => deleteTodo(todo.id) }
      >
        Delete
      </button>
    </div>
  );
}

export default Todos