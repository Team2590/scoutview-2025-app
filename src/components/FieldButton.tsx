import { useData } from '../data'

const keys = ['Made', 'Missed', 'Not Attempted']

export default function FieldButton({ index, top, left }: { index: number, top: number | string, left: number | string }) {
    const [data, setData] = useData()

    const handleClick = (key: NoteResult) => {
        setData(prev => {
            const notes = [...prev.notes]
            notes[index] = key
            return { ...prev, notes }
        })
    }

    return (
        <div className='dropdown' style={{ position: 'absolute', top, left }}>
            <button className='btn btn-field field-button d-flex align-items-baseline justify-content-center p-0' type='button' data-bs-toggle='dropdown' aria-expanded='false'>
                <p>{index + 1}</p>
            </button>
            <ul className='dropdown-menu'>
                {keys.map(key => {
                    return <li key={key}><a className={`dropdown-item ${data.notes[index] == key && 'active'}`} onClick={() => handleClick(key as NoteResult)}>{key}</a></li>
                })}
            </ul>
        </div>
    )
}