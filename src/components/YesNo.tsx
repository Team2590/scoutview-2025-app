import { Alliance, useAlliance, useData } from '../data'

export default function YesNo({ property, label }: { property: keyof Data, label: string }) {
    const [data, setData] = useData()
    const [alliance] = useAlliance()

    const setTrue = () => {
        setData(prevData => {
            return { ...prevData, [property]: 'true' }
        })
    }

    const setFalse = () => {
        setData(prevData => {
            return { ...prevData, [property]: 'false' }
        })
    }

    return (
        <div className='text-center'>
            <p className='d-block'>{label}</p>
            <div className='btn-group mt-n2'>
                <button
                    className={`btn btn-${alliance == Alliance.RED ? 'red-alliance' : 'blue-alliance'}-primary px-5 py-4 rounded-end-0 ${data[property] == 'true' ? 'active' : ''}`}
                    onClick={setTrue}
                >
                    Yes
                </button>
                <button
                    className={`btn btn-${alliance == Alliance.RED ? 'red-alliance' : 'blue-alliance'}-primary px-5 py-4 rounded-start-0 ${data[property] == 'false' ? 'active' : ''}`}
                    onClick={setFalse}
                >
                    No
                </button>
            </div>
        </div>
    )
}
