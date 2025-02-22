import SectionWrapper from '../components/SectionWrapper'
import PlusMinus from '../components/PlusMinus'
import { useVerticalLayout } from '../hooks/useVerticalLayout'

export default function Teleoperated() {
    const vertical = useVerticalLayout()

    return (
        <SectionWrapper label='Teleoperated'>
            {!vertical ?
                (
                    <div className='mx-auto row mt-5 container gap-4'>
                        <div className='col'>
                            <div>
                                <PlusMinus label='Coral L1' property='teleopCoralL1' />
                            </div>
                            <div className='mt-4'>
                                <PlusMinus label='Coral L2' property='teleopCoralL2' />
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <img src='reef.png' className='mt-5' />
                        </div>
                        <div className='col'>
                            <div>
                                <PlusMinus label='Coral L3' property='teleopCoralL3' />
                            </div>
                            <div className='mt-4'>
                                <PlusMinus label='Coral L4' property='teleopCoralL4' />
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className='d-flex justify-content-center'>
                            <img src='reef.png' className='mt-5' />
                        </div>
                        <div className='mx-auto row mt-5 container gap-4'>
                            <div className='col'>
                                <div>
                                    <PlusMinus label='Coral L1' property='teleopCoralL1' />
                                </div>
                                <div className='mt-4'>
                                    <PlusMinus label='Coral L2' property='teleopCoralL2' />
                                </div>
                            </div>
                            <div className='col'>
                                <div>
                                    <PlusMinus label='Coral L3' property='teleopCoralL3' />
                                </div>
                                <div className='mt-4'>
                                    <PlusMinus label='Coral L4' property='teleopCoralL4' />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            <div className='mx-auto mt-3'>
                <PlusMinus label='Algae Removed from Reef' property='teleopAlgaeRemovedFromReef' />
            </div>
            {!vertical ? (
                <div className='mx-auto row my-5 container gap-4'>
                    <div className='col'>
                        <div className='d-flex justify-content-center'>
                            <img src='processor.png' height={200} width='auto' />
                        </div>
                        <div className='mt-3'>
                            <PlusMinus label='Processor Algae' property='teleopProcessorAlgae' />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='d-flex justify-content-center'>
                            <img src='net.png' height={200} width='auto' />
                        </div>
                        <div className='mt-3'>
                            <PlusMinus label='Net Algae' property='teleopNetAlgae' />
                        </div>
                    </div>
                </div>
            ) : (
                <div className='mx-auto my-5 container gap-3'>
                    <div className='row'>
                        <div className='col d-flex justify-content-center'>
                            <img src='processor.png' height={200} width='auto' />
                        </div>
                        <div className='col mt-3'>
                            <PlusMinus label='Processor Algae' property='teleopProcessorAlgae' />
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col d-flex justify-content-center'>
                            <img src='net.png' height={190} width='auto' />
                        </div>
                        <div className='col mt-3'>
                            <PlusMinus label='Net Algae' property='teleopNetAlgae' />
                        </div>
                    </div>
                </div>
            )}
        </SectionWrapper>
    )
}