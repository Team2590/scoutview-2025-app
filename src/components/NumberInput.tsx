import React from 'react'
import { useData } from '../data'

export default function NumberInput({ property, label, disabled, lg }: { property: keyof Data, label: string, disabled: boolean, lg?: boolean }) {
    const [data, setData] = useData()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const parsed = e.target.value.replace(/[^0-9]/g, '')
        setData(prevData => {
            return { ...prevData, [property]: parsed }
        })
    }

    return (
        <div className={`input-group ${lg ? 'input-group-lg' : ''}`}>
            <span className='input-group-text'>{label}</span>
            <input className='form-control' onChange={handleChange} value={data[property] as string} disabled={disabled} />
        </div>
    )
}
