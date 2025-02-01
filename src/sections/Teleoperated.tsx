import SectionWrapper from '../components/SectionWrapper'
import PlusMinus from '../components/PlusMinus'

export default function Teleoperated() {
    return (
        <SectionWrapper label='Teleoperated'>
            <div className='mx-auto row mt-5 container gap-4'>
                <div className='col'>
                    <PlusMinus label='Coral L1' property='teleopCoralL1' />
                </div>
                <div className='col'>
                    <PlusMinus label='Coral L2' property='teleopCoralL2' />
                </div>
                <div className='col'>
                    <PlusMinus label='Coral L3' property='teleopCoralL3' />
                </div>
                <div className='col'>
                    <PlusMinus label='Coral L4' property='teleopCoralL4' />
                </div>
            </div>
            <div className='mx-auto row mt-5 container gap-4 pb-5'>
                <div className='col'>
                    <PlusMinus label='Processor Algae' property='teleopProcessorAlgae' />
                </div>
                <div className='col'>
                    <PlusMinus label='Net Algae' property='teleopNetAlgae' />
                </div>
            </div>
        </SectionWrapper >
    )
}
