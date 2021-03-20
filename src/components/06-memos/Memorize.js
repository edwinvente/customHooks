import React, { useState } from 'react'
import { Small } from './Small'
import { useCounter } from "../../hooks/useCounter";

export const Memorize = () => {

    const { counter, increment } = useCounter(0)
    const [toggle, setToggle] = useState(true)

    const handleToggle = (e) => {
        e.preventDefault()
        console.log('toggle render');
        setToggle(!toggle)
    }

    return (
        <div>
            <h1>Memorize example</h1>

            <Small counter={counter} />

            <button onClick={increment} className='btn btn-primary'> +1 </button>

            <button onClick={(e) => handleToggle(e)} className='btn btn-outline-primary ml-3'> Toggle </button>
        </div>
    )
}
