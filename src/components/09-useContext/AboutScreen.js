import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

    const { setUser } = useContext(UserContext);

    return (
        <div>
            <h1>About App</h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={() => setUser({})}
            >
                Logout
            </button>
        </div>
    )
}
