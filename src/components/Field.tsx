import { useFieldFlipped } from '../data'

interface BtnPositions {
    top: number | string
    left: number | string
}

export default function Field() {
    const [fieldFlipped] = useFieldFlipped()

    return (
        <>
            <div className='mx-auto position-relative'>
                <img src={fieldFlipped ? 'field-flipped.png' : 'field.png'} style={{ maxWidth: '90vw' }} alt='Field Image' className='d-block mx-auto mt-5 img-fluid' />
            </div>
        </>
    )
}