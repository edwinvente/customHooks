import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}
    `);

    const { author, quote } = !!data && data[0]

    return (
        <div>
            <h1>Breaking Quotes</h1>

            {loading ?
                <div className='alert alert-info text-center'>
                    Loanding...
                </div>
                :
                <blockquote className='blockquote text-end'>
                    <p className='mb-1'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
            }

            <button
                onClick={increment}
                className='btn btn-primary btn-sm btn-block'>
                Next quote
            </button>

        </div>
    )
}
