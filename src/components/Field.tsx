import FieldButton from './FieldButton'
import SelectInput from './SelectInput'

interface BtnPositions {
    top: number | string
    left: number | string
}

const btnPositions: BtnPositions[] = [
    { top: '48%', left: '25.5%' },
    { top: '64%', left: '25.5%' },
    { top: '79%', left: '25.5%' },
    { top: '11.5%', left: '49%' },
    { top: '30%', left: '49%' },
    { top: '48%', left: '49%' },
    { top: '66%', left: '49%' },
    { top: '84%', left: '49%' },
    { top: '48%', left: '73%' },
    { top: '64%', left: '73%' },
    { top: '79%', left: '73%' }
]

export default function Field() {
    return (
        <>
            <div className='mx-auto position-relative'>
                {btnPositions.map(({ top, left }, i) => {
                    return <FieldButton top={top} left={left} index={i} key={i} />
                })}
                <img src='field.jpg' alt='Field Image' className='d-block mx-auto mt-5 img-fluid' />
            </div>
            <div className='mt-4'>
                <SelectInput label='Preload Note' options={['Made', 'Missed', 'Not Attempted']} property='preloadNote' />
            </div>
        </>
    )
}