import Todoinput from "./Components/Todoinput";
import { TodoProvider } from "./context";
import Todos from "./Components/Todos";
import { useState,useEffect } from "react";


function App() {

  const [todos,setTodos] = useState([]);



  const addTodo = (todo) => {

    setTodos((previous) => [...previous,{id: Date.now(),...todo}]);

  }

  const updateTodo = (id ,todo) =>{

    setTodos((previous) => {
      previous.map((eachtodo) => {
        if(eachtodo.id === id){
          todo
        }
        else{
          eachtodo
        }
      })
    })
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
      <div className=" bg-violet-700 w-full h-screen flex justify-center  items-center flex-col gap-4 ">
        <div className=" bg-slate-600 rounded-lg p-4 text-white w-2/3 text-center font-mono flex flex-col gap-6">
          {/* this div will contain the input part in it */}
          <p>Empower Your Day: One Task at a Time!</p>
          <Todoinput />
        </div>

        <div className="flex flex-col gap-6 w-2/3 ">
          {/* this div will contain all the todos inside it , it will apply loop to iterate all the todos */}
          {
            todos.map((todo)=>{
              return  <div key = { todo.id }>
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
