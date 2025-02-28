import SectionWrapper from '../components/SectionWrapper'
import PlusMinus from '../components/PlusMinus'
import SelectInput from '../components/SelectInput'
import Field from '../components/Field'
import { useVerticalLayout } from '../hooks/useVerticalLayout'

export default function Autonomous() {
    const vertical = useVerticalLayout()

    return (
        <SectionWrapper label='Autonomous'>
            <Field />
            <div className='mt-4'>
                <SelectInput label='Starting Position' options={['A', 'B', 'C']} property='startingPos' />
            </div>
            {!vertical ?
                (
                    <div className='mx-auto row mt-5 container gap-4'>
                        <div className='col'>
                            <div>
                                <PlusMinus label='Auto Coral L1' property='autoCoralL1' />
                            </div>
                            <div className='mt-4'>
                                <PlusMinus label='Auto Coral L2' property='autoCoralL2' />
                            </div>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <img src='reef.png' className='mt-5' />
                        </div>
                        <div className='col'>
                            <div>
                                <PlusMinus label='Auto Coral L3' property='autoCoralL3' />
                            </div>
                            <div className='mt-4'>
                                <PlusMinus label='Auto Coral L4' property='autoCoralL4' />
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
                                    <PlusMinus label='Auto Coral L1' property='autoCoralL1' />
                                </div>
                                <div className='mt-4'>
                                    <PlusMinus label='Auto Coral L2' property='autoCoralL2' />
                                </div>
                            </div>
                            <div className='col'>
                                <div>
                                    <PlusMinus label='Auto Coral L3' property='autoCoralL3' />
                                </div>
                                <div className='mt-4'>
                                    <PlusMinus label='Auto Coral L4' property='autoCoralL4' />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
            <div className='mx-auto mt-3'>
                <PlusMinus label='Auto Algae Removed from Reef' property='autoAlgaeRemovedFromReef' />
            </div>
            {!vertical ? (
                <div className='mx-auto row my-5 container gap-4'>
                    <div className='col'>
                        <div className='d-flex justify-content-center'>
                            <img src='processor.png' height={200} width='auto' />
                        </div>
                        <div className='mt-3'>
                            <PlusMinus label='Auto Processor Algae' property='autoProcessorAlgae' />
                        </div>
                    </div>
                    <div className='col'>
                        <div className='d-flex justify-content-center'>
                            <img src='net.png' height={200} width='auto' />
                        </div>
                        <div className='mt-3'>
                            <PlusMinus label='Auto Net Algae' property='autoNetAlgae' />
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
                            <PlusMinus label='Auto Processor Algae' property='autoProcessorAlgae' />
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col d-flex justify-content-center'>
                            <img src='net.png' height={190} width='auto' />
                        </div>
                        <div className='col mt-3'>
                            <PlusMinus label='Auto Net Algae' property='autoNetAlgae' />
                        </div>
                    </div>
                </div>
            )}
        </SectionWrapper>
    )
}
