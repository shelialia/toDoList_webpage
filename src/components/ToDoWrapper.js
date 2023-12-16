import React, {useState} from 'react'
import ToDoForm from './ToDoForm';
import { v4 as uuidv4 } from 'uuid';
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';
uuidv4();

const ToDoWrapper = () => {
  // declare a variable of to dos, and a function settodos that changes the state of it
  // initially, there is nothing in the array
    const [toDos, setToDos] = useState([])

    // keeping track of state (ie. keep track of the todos that are added?)
    const addToDo = toDo => {
        // ... helps make a copy of the toDos
        setToDos([...toDos, {id: uuidv4(), 
            task: toDo, completed: false, isEditing: false}])
            console.log(toDos)
    }
    const toggleComplete = (id) => {
      setToDos(
        toDos.map((toDo) =>
          toDo.id === id 
            ? { ...toDo, completed: !toDo.completed } 
            : toDo
        )
      )
    }
    const deleteToDo = (id) => {
      setToDos(
        toDos.filter(toDo =>
          toDo.id !== id)
      )
    }
    const editToDo = (id) => {
      setToDos(toDos.map(toDo =>
        toDo.id === id
          ? {...toDo, isEditing: !toDo.isEditing}
          : toDo))
    }
    const editTask = (task, id) => {
      setToDos(toDos.map(toDo =>
        toDo.id === id ? { ...toDo, task, isEditing: false } : toDo
      ))
    }
    // the todoform uses the function addToDo
    // we then put the component todo that contains a list of all the todos
  return (
    <div className='ToDoWrapper'>
      <h1>Get Things Done!</h1>
        <ToDoForm addToDo={addToDo}/>
        {toDos.map((toDo) => (
          toDo.isEditing 
            ? ( <EditToDoForm task={toDo} key={toDo.id} editToDo={editTask}/> )
            : ( <ToDo task={toDo} key={toDo.id} 
              toggleComplete={toggleComplete}
              deleteToDo={deleteToDo}
              editToDo={editToDo}/> )
        ))}
    </div>
  )
}

export default ToDoWrapper