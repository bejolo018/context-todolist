import React, { createContext, useState } from 'react'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        {
            task: 'Read book',
            id: 1
        },
        {
            task: 'Wash book',
            id: 2
        },
        {
            task: 'Eat book',
            id: 3
        }
    ])

    return (
        <TaskListContext.Provider value={{tasks}}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider