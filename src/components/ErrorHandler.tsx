import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ErrorHandler() {
    const navigate = useNavigate()

    useLayoutEffect(() => {
        alert('There has been an error, re-routing to main page and clearing storage.')
        localStorage.clear()
        navigate('/')
    }, [])

    return (
        <div>
            <p className='text-center'>Error</p>
        </div>
    )
}