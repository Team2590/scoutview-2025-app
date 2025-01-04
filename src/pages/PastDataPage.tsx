import { generateExportArray } from '../util/generateExportArray'
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom'

export default function PastDataPage() {
    return (
        <>
            <div className='ms-2 mt-1'>
                <Link to='/' className='text-decoration-none'> &#8592; Back</Link>
            </div>
            <div className='d-flex flex-column'>
                {localStorage.getItem('nemesis-past-data') && JSON.parse(localStorage.getItem('nemesis-past-data')!).reverse().map((data: Data) => {
                    return (
                        <>
                            <div className='mx-auto my-3'>
                                <QRCode
                                    value={JSON.stringify(generateExportArray(data))}
                                    bgColor='white'
                                    size={384}
                                    style={{ border: '20px solid white' }}
                                />
                                <p className='text-center mt-2'>{data.scoutName}, Match {data.matchNum}, Team {data.teamNum}</p>
                            </div>
                        </>
                    )
                })}
                {localStorage.getItem('nemesis-past-data') == null && <p className='text-center h4'>No Past Data</p>}
            </div>
        </>
    )
}
