import { useCallback, useLayoutEffect, useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import PlusMinus from '../components/PlusMinus'
import SelectInput from '../components/SelectInput'
import Field from '../components/Field'

export default function Autonomous() {
    const [cols, setCols] = useState(true)

    const changeButtonOrientation = useCallback(() => {
        if (window.innerWidth < 1080) {
            setCols(false)
        } else {
            setCols(true)
        }
    }, [])

    useLayoutEffect(() => {
        changeButtonOrientation()
        window.addEventListener('resize', changeButtonOrientation)
        window.addEventListener('orientationchange', changeButtonOrientation)

        return () => {
            window.removeEventListener('resize', changeButtonOrientation)
            window.removeEventListener('orientationchange', changeButtonOrientation)
        }
    }, [])

    return (
        <SectionWrapper label='Autonomous'>
            <Field />
            <div className='mt-4'>
                <SelectInput label='Starting Position' options={['A', 'B', 'C']} property='startingPos' />
            </div>
            <div className='mx-auto row mt-5 container gap-4'>
                <div className='col'>
                    <div>
                        <PlusMinus label='Coral L1' property='autoCoralL1' />
                    </div>
                    <div className='mt-4'>
                        <PlusMinus label='Coral L2' property='autoCoralL2' />
                    </div>
                </div>
                <div className='col d-flex justify-content-center'>
                    <img src='reef.png' className='mt-5' />
                </div>
                <div className='col'>
                    <div>
                        <PlusMinus label='Coral L3' property='autoCoralL3' />
                    </div>
                    <div className='mt-4'>
                        <PlusMinus label='Coral L4' property='autoCoralL4' />
                    </div>
                </div>
            </div>
            <div className='mx-auto mt-3'>
                <div className='col'>
                    <PlusMinus label='Algae Removed from Reef' property='autoAlgaeRemovedFromReef' />
                </div>
            </div>
            <div className='mx-auto row my-5 container gap-4'>
                <div className='col'>
                    <div className='d-flex justify-content-center'>
                        <img src='processor.png' height={200} width='auto' />
                    </div>
                    <div className='mt-3'>
                        <PlusMinus label='Processor Algae' property='autoProcessorAlgae' />
                    </div>
                </div>
                <div className='col'>
                    <div className='d-flex justify-content-center'>
                        <img src='net.png' height={200} width='auto' />
                    </div>
                    <div className='mt-3'>
                        <PlusMinus label='Net Algae' property='autoNetAlgae' />
                    </div>
                </div>
            </div>
        </SectionWrapper>
    )
}
