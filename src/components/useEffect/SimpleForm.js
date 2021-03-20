import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

    const [form, setForm] = useState({
        name: '',
        email: ''
    })

    const { name, email } = form

    useEffect(() => {
        //console.log('change name ' + name);
    }, [name])

    useEffect(() => {
        //console.log('change email ' + email);
    }, [email])

    useEffect(() => {
        //console.log('change form ***');
    }, [form])

    const handleInputs = ({ target }) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>Fomulario simple</h1>

            <input
                type='text'
                name='name'
                className='form-control'
                placeholder='Name'
                value={name}
                onChange={handleInputs}
            />

            <input
                type='text'
                name='email'
                className='form-control'
                placeholder='email@gmail.com'
                value={email}
                onChange={handleInputs}
            />

            {(name === 'edwin') ? <Message /> : ':('}

        </>
    )
}
