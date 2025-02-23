import SectionWrapper from '../components/SectionWrapper'
import { Alliance, useAlliance, useAutoAssignTeams, useAutoIncrementMatches } from '../data'
import NameInput from '../components/NameInput'
import NumberInput from '../components/NumberInput'

export default function GetMatch() {
    const [alliance] = useAlliance()
    const [autoIncrementMatches] = useAutoIncrementMatches()
    const [autoAssignTeams] = useAutoAssignTeams()

    return (
        <SectionWrapper label='Get Match'>
            <div className='d-flex flex-column gap-4 mx-auto mt-5 container'>
                <NameInput />
                <NumberInput property='teamNum' label='Team Number' disabled={autoAssignTeams} />
                <NumberInput property='matchNum' label='Match Number' disabled={autoIncrementMatches} />
            </div>
            {autoAssignTeams && (
                <div className='text-center'>
                    <p className='display-1 mt-5'>Your Alliance: {alliance == Alliance.RED ? 'RED!' : 'BLUE!'}</p>
                </div>
            )}
        </SectionWrapper>
    )
}
