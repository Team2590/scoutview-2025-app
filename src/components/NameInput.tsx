import { useData } from '../data'
import { names } from '../util/names'

export default function NameInput() {
    const [data, setData] = useData()

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setData(prevData => {
            return { ...prevData, ['scoutName']: e.target.value }
        })
    }

    return (
        <div className='input-group'>
            <span className='input-group-text'>Scout Name</span>
            <select className='form-control' value={data.scoutName} onChange={handleChange}>
                {names.map(name => <option value={name} key={name}>{name}</option>)}
            </select>
        </div>
    )
}