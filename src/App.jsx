import Todoinput from "./Components/Todoinput";
import { TodoProvider } from "./context";
import Todos from "./Components/Todos";
import { useState,useEffect } from "react";
import "./Style/App.scss";


function App() {

  const [todos,setTodos] = useState([]);



  const addTodo = (todo) => {

    setTodos((previous) => [...previous,{id: Date.now(),...todo}]);

  }

  const updateTodo = (id ,todo) =>{

    setTodos((previous) => {
       return previous.map((eachtodo) => eachtodo.id === id ? todo : eachtodo )
      });
  }


  const deleteTodo = (id) => {

    setTodos((previous) =>  {
      return previous.filter((todo) => (todo.id !== id))})
  }

  const togglecomplete = (id) => {

    setTodos((prev) => prev.map((prevtodo) => prevtodo.id === id ? {...prevtodo, complete: !prevtodo.complete } : prevtodo) )

  } 


  useEffect(() => {
    // this is for the getItem from the local storage 
     const todos = JSON.parse( localStorage.getItem("todos"));

     if( todos && todos.length > 0){
      setTodos(todos);
     }
  }, [])

  useEffect(() => {
    // this is for the setItem from the localStorage 

    localStorage.setItem("todos",JSON.stringify(todos));

  }, [todos])
  
  


  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo,togglecomplete}}>
      {/* this div is the base of the todo */}
      <div className="base">
        <div className="inputbox">
          {/* this div will contain the input part in it */}
          <p>Empower Your Day: One Task at a Time!</p>
          <Todoinput />
        </div>

        <div className="todos">
          {/* this div will contain all the todos inside it , it will apply loop to iterate all the todos */}
          {
            todos.map((todo)=>{
              return  <div className="eachtodo" key = { todo.id }>
                  <Todos todo={todo}/>
                </div>
              
            })
          }
        </div>
      </div>
    </TodoProvider>
  );
}

export default App
