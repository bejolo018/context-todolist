import React from 'react'

const Task = ({task}) => {
    return (
        <li>
            <span>{task.title}</span>
            <div>
                <button>
                    <i className="fas fa-trash-alt"></i>
                </button>
                <button>
                    <i className="fas fa-pen"></i>
                </button>
            </div>
        </li>
    )
}

export default Task
