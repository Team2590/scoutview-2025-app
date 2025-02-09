import React from 'react'
import { useData } from '../data'

export default function TextInput({ property, label, disabled }: { property: keyof Data, label: string, disabled: boolean }) {
    const [data, setData] = useData()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData(prevData => {
            return { ...prevData, [property]: e.target.value }
        })
    }

    return (
        <div className='input-group'>
            <span className='input-group-text'>{label}</span>
            <input type='text' className='form-control' onChange={handleChange} value={data[property] as string} disabled={disabled} />
        </div>
    )
}
