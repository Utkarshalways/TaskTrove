import React, { useState } from 'react'
import { useTodo } from '../context';
import "../Style/Todos.scss";

const Todos = ({todo}) => {
  const [Editable, setEditable] = useState(false);
  const [todomsg, setTodomsg] = useState(todo.todo);
  const {deleteTodo, updateTodo,togglecomplete} = useTodo();

  const edit = () => {
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
      {/* {console.log(todo.complete)} */}
      <input
        type="checkbox"
        value={todo.complete}
        onChange={togglecompleted}
        checked={todo.complete}
      />
      {/* {console.log(todo.complete)} */}
      <input
        type="text"
        className={
          "todotext" +
          (todo.complete ? " todotextmodification " : "")
        }
        value={todomsg}
        readOnly={!Editable}
        onChange={(e) =>{

         setTodomsg(e.target.value)
              
        }}
      />

      <button
        className="Editbtn"
        // disabled={todo.complete}
      // this is to disable the button while the task or todo is completed
        onClick={() => {

          if(todo.complete) return;

          if(Editable){
            edit();
          }else{

          setEditable((Editable)=>!Editable);
          }
          
        }}
        
      >
        {!Editable ? (
          <span className="material-symbols-outlined  editbtn ">edit</span>
        ) : (
          <span className="material-symbols-outlined  savebtn ">save</span>
        )}
      </button>
      <button
        className="deletebtn"
        onClick={() => deleteTodo(todo.id)}
      // disabled={todo.complete} 

      // this is to disable the button while the task or todo is completed
      >
        <span class="material-symbols-outlined ">delete</span>
      </button>
    </div>
  );
}

export default Todos