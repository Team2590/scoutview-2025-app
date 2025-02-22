import { useState, useCallback, useLayoutEffect } from 'react'

export const useVerticalLayout = () => {
    const [cols, setCols] = useState(true)

    const handle = useCallback(() => {
        if (window.innerWidth < 720) {
            setCols(true)
        } else {
            setCols(false)
        }
    }, [])

    useLayoutEffect(() => {
        handle()
        window.addEventListener('resize', handle)
        window.addEventListener('orientationchange', handle)

        return () => {
            window.removeEventListener('resize', handle)
            window.removeEventListener('orientationchange', handle)
        }
    }, [])

    return cols
}