import React, { useCallback } from 'react'
import { Alliance, useAlliance, useData } from '../data'

const buttonStyles: React.CSSProperties = { width: 78, height: 78 }

export default function PlusMinus({ property, label }: { property: keyof Data, label: string }) {
    const [data, setData] = useData()
    const [alliance] = useAlliance()

    const increment = useCallback(() => {
        setData(prevData => {
            return {
                ...prevData,
                [property]: prevData[property] as number + 1
            }
        })
    }, [])

    const decrement = useCallback(() => {
        setData(prevData => {
            const current = prevData[property] as number
            const val = current - 1 > 0 ? current - 1 : 0

            return {
                ...prevData,
                [property]: val
            }
        })
    }, [])

    return (
        <div className='text-center'>
            <p className='d-block mb-2'>{label}</p>
            <p className={`bg-${alliance == Alliance.RED ? 'info' : 'blue-alliance-info'} mx-auto py-3 rounded`} style={{ width: 156 }}>{data[property]}</p>
            <div className='btn-group' style={{ marginTop: -16 }}>
                <button
                    className={`btn btn-tertiary rounded-end-0`}
                    style={buttonStyles}
                    onClick={decrement}
                >
                    -
                </button>
                <button
                    className={`btn btn-${alliance == Alliance.RED ? 'primary' : 'blue-alliance'} rounded-start-0`}
                    style={buttonStyles}
                    onClick={increment}
                >
                    +
                </button>
            </div>
        </div >
    )
}
