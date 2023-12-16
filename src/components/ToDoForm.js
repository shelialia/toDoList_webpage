import React, {useState} from 'react'

// we pass in the js object addToDo that we declared in the ToDoWrapper page
// by passing it in, we allow ourselves to access its function
const ToDoForm = ({addToDo}) => {
  // we use state: declare a variable value and a function setvalue
  // intialise it to be a string
    const [value, setValue] = useState("")
    
    // declare a function that handles the value that the user keys in and submits
    // event is an object that handles what happens to the webpage when the user
    // presses submit
    const handleSubmit = event => {
        // prevent the page from reloading
        event.preventDefault();

        // we passed this js object in, and now we want to give it the value that the
        // user input. this helps us add to our todolist
        addToDo(value);
        
        // clears the textbox each time the submit button is pressed
        setValue("")
    }

    // the return helps to handle what happens when the user is typing
    // we pass in the function handleSubmit to our ToDoForm
    // we edit the properties of the todoform, such as putting in placeholder text
    // value is a property of input element
    // we do {value} to access the current value the state variable in useState
    // the onChange event handler is triggered everytime the user types something new into the input textbox
    // event is an object that handles what happens to the webpage
    // we set the value of the textbox to be that event
    // we add a button for submitting
  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input'
            placeholder="What is the task today?"
            value={value}
            onChange={(event) => setValue(event.target.value)}/>
        <button type='submit' className='todo-btn'>Submit</button>
    </form>
  )
}

export default ToDoForm