import { DataSchema, useAutoIncrementMatches, useData, usePastData } from '../data'
import { defaultData } from './../data'
import SectionWrapper from '../components/SectionWrapper'
import QRCode from 'react-qr-code'
import CheckData from '../components/CheckData'
import { generateExportArray } from '../util/generateExportArray'

export default function Export() {
    const [data, setData] = useData()
    const [autoIncrementMatches] = useAutoIncrementMatches()
    const [_, addPastData] = usePastData()

    const resetData = () => {
        if (confirm('Are you sure that you want to clear?')) {
            addPastData(data)
            if (autoIncrementMatches) {
                setData(prev => ({
                    ...defaultData,
                    scoutName: prev.scoutName,
                    matchNum: Number(prev.matchNum) + 1,
                }))
            } else {
                setData(prev => ({
                    ...defaultData,
                    scoutName: prev.scoutName,
                    matchNum: '',
                    teamNum: ''
                }))
            }
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    }

    const exportData = generateExportArray(DataSchema.parse(data))

    console.log(exportData)
    console.log(JSON.stringify(exportData))

    return (
        <SectionWrapper label='Export'>
            <div style={{ minHeight: 'calc(529px + 5rem)' }}>
                <div className='mx-auto text-center mt-5'>
                    <QRCode
                        value={JSON.stringify(exportData)}
                        bgColor='white'
                        size={384}
                        style={{ border: '20px solid white' }}
                    />
                </div>
                <div className='text-center mt-3'>
                    <CheckData />
                </div>
            </div>
            <button
                className='btn btn-success rounded-0 w-100 text-white py-5 position-absolute bottom-0'
                style={{ fontSize: '1.75rem' }}
                onClick={resetData}
            >
                Clear
            </button>
        </SectionWrapper>
    )
}
