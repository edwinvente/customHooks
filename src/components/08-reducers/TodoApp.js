import React, { useEffect, useReducer, useState } from 'react'
import { ListTodos } from './ListTodos'
import './styles.css'
import { TodoAdd } from './TodoAdd'
import { todoReducer } from './todoReducer'

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const handleDelete = ({ id }) => {
        const action = {
            type: 'delete',
            payload: id
        }
        dispatch(action);
    }

    const handleAddTodo = (todo) => {
        dispatch({
            type: 'add',
            payload: todo
        })
    }

    const handleToggle = ({ id }) => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }

    return (
        <div>
            <h1>Todo App  ( {todos.length} )</h1>
            <hr />

            <div className='row'>
                <div className='col-7'>
                    {/* list todos -- todos, handleToggle, handleDelete */}
                    <ListTodos
                        todos={todos}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                    />
                </div>
                <div className='col-5'>
                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                    />
                </div>
            </div>

        </div>
    )
}
