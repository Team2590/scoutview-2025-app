import PlusMinus from '../components/PlusMinus'
import SectionWrapper from '../components/SectionWrapper'
import YesNo from '../components/YesNo'

export default function Endgame() {
    return (
        <SectionWrapper label='Endgame'>
            <div className='mx-auto row mt-5 container gap-4'>
                <div className='col'>
                    <PlusMinus label='Time Taken to Climb' property='timeTakenToClimb' />
                </div>
                <div className='col'>
                    <YesNo label='Lost Comms?' property='lostComms' />
                </div>
            </div>
        </SectionWrapper>
    )
}
