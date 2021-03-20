import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {
    const [state, setState] = useState({ data: null, loading: true, error: null })

    const isMounted = useRef(true)

    useEffect(() => {
        setState({ data: null, loading: true, error: null })
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                }
            })

        return () => {
            isMounted.current = false
        }

    }, [url])

    return state;

}
