import React, { useContext } from 'react'
import { TaskListContext } from '../Context/TaskListContext'

const TaskForm = () => {
    const { addTask } = useContext(TaskListContext)

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type='text' placeholder='Add Task' required>

            </input>
            <div>
                <button type='submit'>Add Task</button>
                <button>Edit Task</button>
            </div>
        </form>
    )
}

export default TaskForm
