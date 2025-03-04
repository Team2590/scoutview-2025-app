import { generateExportArray } from '../util/generateExportArray'
import QRCode from 'react-qr-code'
import { Link } from 'react-router-dom'
import { usePastData } from '../data'

export default function PastDataPage() {
    const [pastData] = usePastData()

    return (
        <>
            <div className='ms-2 mt-1'>
                <Link to='/' className='text-decoration-none'> &#8592; Back</Link>
            </div>
            <div className='d-flex flex-column'>
                {[...pastData].reverse().map((data: Data) => {
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
                {pastData.length < 1 && <p className='text-center h4'>No Past Data</p>}
            </div>
        </>
    )
}
