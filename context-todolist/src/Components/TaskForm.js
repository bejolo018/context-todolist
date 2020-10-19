import React, { useContext, useState } from 'react'
import { TaskListContext } from '../Context/TaskListContext'

const TaskForm = () => {
    const { addTask } = useContext(TaskListContext)

    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(title)
        setTitle('')
    }


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={title} type='text' placeholder='Add Task' required>

            </input>
            <div>
                <button type='submit'>Add Task</button>
                <button>Edit Task</button>
            </div>
        </form>
    )
}

export default TaskForm
