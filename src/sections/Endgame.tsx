import SectionWrapper from '../components/SectionWrapper'
import SelectInput from '../components/SelectInput'
import YesNo from '../components/YesNo'

export default function Endgame() {
    return (
        <SectionWrapper label='Endgame'>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col'>
                        <YesNo property='traverse' label='Traverse Chain?' />
                    </div>
                    <div className='col'>
                        <YesNo property='twoRobot' label='Two Robots?' />
                    </div>
                </div>
                <div className='mt-4'>
                    <YesNo property='droppedHit' label='Dropped When Hit?' />
                </div>
            </div>
            <div className='mx-auto d-flex flex-column gap-5 my-5'>
                <SelectInput property='climbLvl' options={['Parked', 'Climb', 'Mic', 'N/A']} label='Climb Level' />
                <SelectInput property='trap' options={['0', '1', '2', '3']} label='Trap Count' />
            </div>
        </SectionWrapper>
    )
}
