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
        "  w-full flex justify-center gap-6 p-4  rounded-lg  " +
        (todo.complete ? "bg-green-500 " : "bg-slate-600")
      }
    >
      <input
        type="checkbox"
        className=" p-20 "
        value={todo.complete}
        onChange={togglecompleted}
      />
      <input
        type="text"
        className={
          " w-2/3  placeholder:text-center rounded-lg  " +
          (todo.complete ? " line-through " : "")
        }
        value={todomsg}
        readOnly={!Editable}
        onChange={(e) => setTodomsg(e.target.value)}
      />

      <button
        className=" border-2 bg-blue-400 p-2 rounded-lg hover:bg-blue-500 text-white"
        onClick={(e) => {
          setEditable(!Editable);
        }}
      >
        {!Editable ? (
          <span className="material-symbols-outlined text-black ">edit</span>
        ) : (
          <span className="material-symbols-outlined text-black ">save</span>
        )}
      </button>
      <button
        className=" border-2 bg-blue-400 p-2 rounded-lg hover:bg-blue-500 text-white "
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default Todos