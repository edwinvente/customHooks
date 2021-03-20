import React, { useState } from 'react'
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks'

export const RealExampleRef = () => {

    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div>
            <h1>RealExampleRef</h1>

            {toggle && <MultipleCustomHooks />}

            <button onClick={handleToggle} className='btn btn-danger btn-sm btn-block mt-5'>Toogle component</button>

        </div>
    )
}
