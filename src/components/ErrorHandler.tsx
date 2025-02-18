import { useLayoutEffect } from 'react'

export default function ErrorHandler() {
    useLayoutEffect(() => {
        if (confirm('There has been an error, reload and clear storage?')) {
            localStorage.clear()
            window.location.reload()
        }
    }, [])

    return (
        <div>
            <p className='text-center'>Error</p>
        </div>
    )
}