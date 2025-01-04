import { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import YesNo from '../components/YesNo'
import SelectInput from '../components/SelectInput'
import PlusMinus from '../components/PlusMinus'
import Field from '../components/Field'
import { useData } from '../data'

export default function Autonomous() {
    const [cols, setCols] = useState(true)
    const [data, setData] = useData()

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

    useEffect(() => {
        setData(prev => {
            let spkrMade_atn = 0
            let spkrMissed_atn = 0
            if (prev.preloadNote == 'Made') spkrMade_atn++
            if (prev.preloadNote == 'Missed') spkrMissed_atn++
            prev.notes.forEach(value => {
                if (value == 'Made') spkrMade_atn++
                if (value == 'Missed') spkrMissed_atn++
            })
            spkrMade_atn -= prev.ampMade_atn
            spkrMissed_atn -= prev.ampMissed_atn
            if (spkrMade_atn < 0) spkrMade_atn = 0
            if (spkrMissed_atn < 0) spkrMissed_atn = 0
            return {
                ...prev,
                spkrMade_atn,
                spkrMissed_atn
            }
        })
    }, [data.notes, data.preloadNote, data.ampMade_atn, data.ampMissed_atn])

    return (
        <SectionWrapper label='Autonomous'>
            <div className='container mx-auto'>
                <Field />
                <div className={`mt-4 ${cols ? 'row' : ''}`}>
                    <div className='col mx-auto mb-4 mb-xl-0'>
                        <SelectInput property='startingPos' label='Starting Position' options={['A', 'B', 'C', 'D']} />
                    </div>
                    <div className='col mx-auto mt-md-5 mt-lg-0'>
                        <YesNo property='leaveWing' label='Leave Start Line?' />
                    </div>
                </div>
                <div className='input-row my-5'>
                    <PlusMinus property='ampMade_atn' label='Amp Made' />
                    <img src='amp.png' alt='Amp Image' className='d-block mx-auto' style={{ maxHeight: 200 }} />
                    <PlusMinus property='ampMissed_atn' label='Amp Missed' />
                </div>
            </div>
        </SectionWrapper>
    )
}
