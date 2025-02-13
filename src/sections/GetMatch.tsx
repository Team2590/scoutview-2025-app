import { useEffect } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import TextInput from '../components/TextInput'
import { Alliance, useAlliance, useAutoAssignTeams, useAutoIncrementMatches, useData, useRobot, useTeams } from '../data'
import NameInput from '../components/NameInput'

export default function GetMatch() {
    const [alliance] = useAlliance()
    const [autoIncrementMatches] = useAutoIncrementMatches()
    const [autoAssignTeams] = useAutoAssignTeams()

    return (
        <SectionWrapper label='Get Match'>
            <div className='d-flex flex-column gap-4 mx-auto mt-5 container'>
                <NameInput />
                <TextInput property='teamNum' label='Team Number' disabled={autoAssignTeams} />
                <TextInput property='matchNum' label='Match Number' disabled={autoIncrementMatches} />
            </div>
            <div className='text-center'>
                <p className='display-1 mt-5'>Your Alliance: {alliance == Alliance.RED ? 'RED!' : 'BLUE!'}</p>
            </div>
        </SectionWrapper>
    )
}
