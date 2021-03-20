import React, { memo } from 'react'

export const Small = memo(({ counter }) => {
    console.log('Me monte :(');
    return (
        <div>
            <h1> {counter} </h1>
        </div>
    )
})
