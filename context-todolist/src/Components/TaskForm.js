import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../Context/TaskListContext'

const TaskForm = () => {
    const { addTask, clearList, editItem, editTask } = useContext(TaskListContext)

    const [title, setTitle] = useState('')

    const handleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(editItem === null){
            addTask(title)
            setTitle('')
        } else{
            editTask(title, editItem.id)
        }

    }

    useEffect(() => {
        if(editItem){
            setTitle(editItem.title)
        } else{
            setTitle('')
        }
    }, [editItem])


    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={title} type='text' placeholder='Add Task' required>

            </input>
            <div>
                <button type='submit'>{editItem ? 'Edit Task' : 'Add Task'}</button>
                <button onClick={clearList}>Clear Task</button>
            </div>
        </form>
    )
}

export default TaskForm
