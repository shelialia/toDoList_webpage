import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

// The task prop in the ToDo component is used to pass data for a single todo item from 
// the parent component (where the .map() is used ie. todoWrapper) to the ToDo component.
// The task prop is expected to be an object containing the details of this todo item.
// task.task is used to access and 
// display the description or text of the todo item within a <p> element.

// put in embedded expression to check if the task is completed.
// if task is completed, its className is completed. else, its classname is empty string
// this allows us to change the css accordingly

// when the ToDo task is clicked, we want this toggle complete to run with that specific
// task id
const ToDo = ({task, toggleComplete, deleteToDo, editToDo}) => {
  return (
    <div className='ToDo'>
        <p className={`${task.completed ? 'completed': ""}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
            <FontAwesomeIcon icon={faPenToSquare} onClick={() => editToDo(task.id)}/>
            <FontAwesomeIcon icon={faTrash} onClick={() => deleteToDo(task.id)}/>
        </div>
    </div>
  )
}

export default ToDo