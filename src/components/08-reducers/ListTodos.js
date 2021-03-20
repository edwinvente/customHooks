import React from 'react'
import { TodoItem } from './TodoItem'

export const ListTodos = ({ todos, handleToggle, handleDelete }) => {
    return (
        <ul className='list-group list-group-flush'>
            {todos.map((todo, i) => (
                //todos list item id, handleToggle, handleDelete
                <TodoItem
                    key={todo.id}
                    i={i}
                    todo={todo}
                    handleToggle={handleToggle}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}
