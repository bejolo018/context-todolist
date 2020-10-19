import React, { createContext, useState } from 'react'
import { v4 as uuid} from 'uuid'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {
            title: 'Read book',
            id: 1
        },
        {
            title: 'Wash book',
            id: 2
        },
        {
            title: 'Eat book',
            id: 3
        }
    ])

    const addTask = (title) => {
        setTasks([...tasks, {title, id: uuid() }])
    }

    return (
        <TaskListContext.Provider value={{tasks}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider