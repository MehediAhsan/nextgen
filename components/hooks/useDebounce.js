import { useState, useEffect } from "react"


export function useDebounce (value, delay = 1000) {
    const [debounce, setDebounce] = useState(value);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounce(value);
        }, delay)

        return () => clearTimeout(timeout)
    }, [value, delay])
    return debounce;
}