import { useAutoAssignTeams, useAutoIncrementMatches, useData, usePastData, useRobot, useTeams } from '../data'
import { defaultData } from './../data'
import SectionWrapper from '../components/SectionWrapper'
import QRCode from 'react-qr-code'
import CheckData from '../components/CheckData'
import { generateExportArray } from '../util/generateExportArray'
import { useCallback } from 'react'

export default function Export() {
    const [data, setData] = useData()
    const [autoIncrementMatches] = useAutoIncrementMatches()
    const [autoAssignTeams] = useAutoAssignTeams()
    const [teams] = useTeams()
    const [robot] = useRobot()
    const [_, add] = usePastData()

    const isDataEmpty = useCallback(() => {
        return Object.keys(data).every((key) => {
            return data[key as keyof Data] == defaultData[key as keyof Data]
        })
    }, [])

    const resetData = useCallback(() => {
        if (confirm('Are you sure that you want to clear?')) {
            if (!isDataEmpty()) add(data)
            if (autoIncrementMatches) {
                const matchNum = Number(data.matchNum) + 1
                const teamNum = autoAssignTeams ? teams[matchNum - 1][robot - 1] : ''
                setData({
                    ...defaultData,
                    scoutName: data.scoutName,
                    matchNum,
                    teamNum
                })
            } else {
                setData({
                    ...defaultData,
                    scoutName: data.scoutName,
                    matchNum: '',
                    teamNum: ''
                })
            }
        }
    }, [])

    const exportData = generateExportArray(data)

    console.log(exportData)

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
