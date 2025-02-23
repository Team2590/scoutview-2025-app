import NumberInput from '../components/NumberInput'
import SectionWrapper from '../components/SectionWrapper'
import YesNo from '../components/YesNo'

export default function Endgame() {
    return (
        <SectionWrapper label='Endgame'>
            <div className='mx-auto row mt-5 container gap-4'>
                <div className='col d-flex align-items-center'>
                    <NumberInput label='Time When Entering Zone' property='timeTakenToClimb' disabled={false} lg={true} />
                </div>
                <div className='col'>
                    <YesNo label='Lost Comms?' property='lostComms' />
                </div>
            </div>
        </SectionWrapper>
    )
}
