import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'

export const SimpleFormWithHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>SimpleFormWithHook</h1>

            <input
                type='text'
                name='name'
                className='form-control animate__animated animate__fadeIn'
                placeholder='Name'
                value={name}
                onChange={handleInputChange}
            />

            <input
                type='text'
                name='email'
                className='form-control animate__animated animate__fadeIn'
                placeholder='email@gmail.com'
                value={email}
                onChange={handleInputChange}
            />

            <input
                type='text'
                name='password'
                className='form-control animate__animated animate__fadeIn'
                placeholder='password'
                value={password}
                onChange={handleInputChange}
            />

            <button type='submit'>Click form</button>

        </form>
    )
}
