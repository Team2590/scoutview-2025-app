import { useData } from '../data'

export default function SelectInput({ property, label, options }: { property: keyof Data, label: string, options: string[] }) {
    const [data, setData] = useData()

    const handleClick = (option: string) => {
        setData(prevData => {
            return { ...prevData, [property]: option }
        })
    }

    return (
        <div className='mx-auto text-center'>
            <p className='d-block'>{label}</p>
            <div className='mt-n2'>
                {options.map((option, index) => {
                    const border = index == 0 ? 'rounded-end-0' : index == options.length - 1 ? 'rounded-start-0' : 'rounded-0'
                    const active = data[property] == option ? 'active' : ''
                    return (
                        <button className={`btn btn-primary px-5 py-4 ${border} ${active}`} onClick={() => handleClick(option)} key={option}>{option}</button>
                    )
                })}
            </div>
        </div>
    )
}
