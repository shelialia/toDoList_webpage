import React, {useState} from 'react'

const EditToDoForm = ({task, editToDo}) => {
    const [value, setValue] = useState(task.task)
    const handleSubmit = event => {
        event.preventDefault();
        editToDo(value, task.id);
    }
    return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
        <input type="text" className='update-input'
            placeholder="Update Task"
            value={value}
            onChange={(event) => setValue(event.target.value)}/>
        <button type='submit' className='update-btn'>Update</button>
    </form>
    )
}

export default EditToDoForm