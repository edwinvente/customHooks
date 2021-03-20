import React, { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef()

    const handleRef = () => {
        inputRef.current.select()
    }

    return (
        <div>
            <h1>FocusScreen</h1>

            <input
                type='text'
                placeholder='su referencia'
                ref={inputRef}
            />

            <button onClick={handleRef} className='btn button-outline-primary'>
                Focus
            </button>

        </div>
    )
}
