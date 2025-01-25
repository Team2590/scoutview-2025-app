import { useCallback, useLayoutEffect, useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import PlusMinus from '../components/PlusMinus'
import SelectInput from '../components/SelectInput'

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
            <div className='mt-4'>
                <SelectInput label='Starting Position' options={['A', 'B', 'C', 'D']} property='startingPos' />
            </div>
            <div className='mx-auto row mt-5 container gap-4'>
                <div className='col'>
                    <PlusMinus label='Coral L1' property='autoCoralL1' />
                </div>
                <div className='col'>
                    <PlusMinus label='Coral L2' property='autoCoralL2' />
                </div>
                <div className='col'>
                    <PlusMinus label='Coral L3' property='autoCoralL3' />
                </div>
                <div className='col'>
                    <PlusMinus label='Coral L4' property='autoCoralL4' />
                </div>
            </div>
            <div className='my-5'>
                <PlusMinus label='Algae Removed from Reef' property='autoAlgaeRemovedFromReef' />
            </div>
        </SectionWrapper>
    )
}
