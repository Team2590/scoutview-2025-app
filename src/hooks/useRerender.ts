import { useState } from 'react'

export const useRerender = () => {
    const [_, set] = useState(false)
    return () => set(!_)
}