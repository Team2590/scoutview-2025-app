interface BtnPositions {
    top: number | string
    left: number | string
}

export default function Field() {
    return (
        <>
            <div className='mx-auto position-relative'>
                <img src='field.jpg' alt='Field Image' className='d-block mx-auto mt-5 img-fluid' />
            </div>
        </>
    )
}