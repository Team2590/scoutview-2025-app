import { useEffect } from 'react'
import { useState } from 'react'

export const useLocalStorage = <T>(key: string, defaultValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [state, setState] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)!) : defaultValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return [state, setState]
}