import React from 'react'

export const TodoItem = ({ todo, handleToggle, handleDelete, i }) => {
    return (
        <li className='list-group-item'>
            <p
                className={`${todo.done && 'complete'}`}
                onClick={() => handleToggle(todo)}
            >
                {i + 1}. {todo.desc}
            </p>
            <button
                className='btn btn-sm btn-danger'
                onClick={() => handleDelete(todo)}
            >Borrar</button>
        </li>
    )
}
