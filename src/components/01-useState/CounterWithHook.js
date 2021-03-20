import React from 'react'
import { useCounter } from '../../hooks/useCounter'

export const CounterWithHook = () => {
    const { state, increment, decrement, reset } = useCounter(100)
    return (
        <div>
            <h1>Counter component {state} </h1>

            <button className='btn' onClick={() => increment(2)}> +2 </button>
            <button className='btn' onClick={reset}> Reset </button>
            <button className='btn' onClick={() => decrement(2)}> -2 </button>
        </div>
    )
}
