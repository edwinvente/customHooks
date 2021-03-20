import React, { useMemo, useState } from 'react'
import { useCounter } from "../../hooks/useCounter";
import { procesoPesado } from "../helpers/ProcesoPesado";

export const MemoHook = () => {

    const { counter, increment } = useCounter(200)
    const [toggle, setToggle] = useState(true)

    const memoProcesoProcesado = useMemo(() => procesoPesado(counter), [counter])

    const handleToggle = (e) => {
        e.preventDefault()
        console.log('toggle render');
        setToggle(!toggle)
    }

    return (
        <div>
            <h1>Memorize example</h1>

            <p> {memoProcesoProcesado} </p>

            <small>{counter}</small>

            <button onClick={increment} className='btn btn-primary'> +1 </button>

            <button onClick={(e) => handleToggle(e)} className='btn btn-outline-primary ml-3'> Toggle /{JSON.stringify(toggle)} </button>
        </div>
    )
}
