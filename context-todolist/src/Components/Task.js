import React, {useContext} from 'react'
import { TaskListContext } from '../Context/TaskListContext'

const Task = ({task}) => {
    const {removeTask, findItem} = useContext(TaskListContext)

    return (
        <li>
            <span>{task.title}</span>
            <div>
                <button onClick={() => removeTask(task.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button onClick={() => findItem(task.id)}>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task
