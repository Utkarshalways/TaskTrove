import React, { useState } from 'react'
import { useTodo } from '../context';
import "../Style/Todos.scss";

const Todos = ({todo}) => {
  const [Editable, setEditable] = useState(false);
  const [todomsg, setTodomsg] = useState(todo.todo);
  const {deleteTodo, updateTodo,togglecomplete} = useTodo();

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
        "todobase " + (todo.complete? "todoComplete" : "todonotComplete")
      }
    >
      {console.log(todo.complete)}
      <input
        type="checkbox"
        value={todo.complete}
        onChange={togglecompleted}
        checked={todo.complete}
      />
      {console.log(todo.complete)}
      <input
        type="text"
        className={
          "todotext" +
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
        <span class="material-symbols-outlined text-black">delete</span>
      </button>
    </div>
  );
}

export default Todos