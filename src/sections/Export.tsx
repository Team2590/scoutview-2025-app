import { useData } from '../data'
import { defaultData } from './../data'
import SectionWrapper from '../components/SectionWrapper'
import QRCode from 'react-qr-code'
import CheckData from '../components/CheckData'
import { generateExportArray } from '../util/generateExportArray'

export default function Export() {
    const [data, setData] = useData()

    const storeData = () => {
        const pastData = localStorage.getItem('nemesis-past-data') ? JSON.parse(localStorage.getItem('nemesis-past-data')!) : []
        const isEmptyData = Object.keys(data).every((key) => {
            return data[key as keyof Data] == defaultData[key as keyof Data]
        })
        if (isEmptyData) return
        pastData.push(data)
        if (pastData.length > 10) {
            localStorage.setItem('nemesis-past-data', JSON.stringify(pastData.slice(1, 11)))
        } else {
            localStorage.setItem('nemesis-past-data', JSON.stringify(pastData))
        }
    }

    const resetData = () => {
        if (confirm('Are you sure that you want to clear?')) {
            storeData()
            if (JSON.parse(localStorage.getItem('auto-increment')!) == true) {
                const matchNum = Number(data.matchNum) + 1
                const teamNum = JSON.parse(localStorage.getItem('auto-assign-teams')!) ? JSON.parse(localStorage.getItem('teams')!)[matchNum - 1][JSON.parse(localStorage.getItem('robot')!) - 1] : ''
                setData({
                    ...defaultData,
                    scoutName: data.scoutName,
                    matchNum,
                    teamNum
                })
            } else[
                setData({
                    ...defaultData,
                    scoutName: data.scoutName,
                    matchNum: '',
                    teamNum: ''
                })
            ]
        }
    }

    const exportData = generateExportArray(data)

    console.log(exportData)

    return (
        <SectionWrapper label='Export'>
            <div style={{ minHeight: 'calc(529px + 5rem)' }}>
                <div className='mx-auto text-center mt-5'>
                    <QRCode
                        value={JSON.stringify(exportData)}
                        bgColor='white'
                        // fgcolor='black'
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
