import { useEffect } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import TextInput from '../components/TextInput'
import { useData } from '../data'

export default function GetMatch() {
    const [data, setData] = useData()

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('auto-increment')!) == true && JSON.parse(localStorage.getItem('auto-assign-teams')!) == true && data.matchNum != undefined && data.matchNum != '') {
            setData(prev => {
                return { ...prev, teamNum: JSON.parse(localStorage.getItem('teams')!)[data.matchNum as number - 1][JSON.parse(localStorage.getItem('robot')!) - 1] }
            })
        }
    }, [data.matchNum])

    return (
        <SectionWrapper label='Get Match'>
            <div className='d-flex flex-column gap-4 mx-auto mt-5 container'>
                <TextInput property='scoutName' label='Scout Name' />
                <TextInput property='teamNum' label='Team Number' />
                <TextInput property='matchNum' label='Match Number' />
            </div>
        </SectionWrapper>
    )
}
