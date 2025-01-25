import { useAtom } from 'jotai'
import { atomWithStorage } from "jotai/utils"

export const defaultData: Data = {
    matchNum: '',
    teamNum: '',
    scoutName: '',
    startingPos: null,
    autoCoralL1: 0,
    autoCoralL2: 0,
    autoCoralL3: 0,
    autoCoralL4: 0,
    autoAlgaeRemovedFromReef: 0,
    teleopCoralL1: 0,
    teleopCoralL2: 0,
    teleopCoralL3: 0,
    teleopCoralL4: 0,
    teleopTimeTakenToClimb: 0,
    teleopProcessorAlgae: 0,
    teleopNetAlgae: 0,
    lostComms: false
}

export const dataAtom = atomWithStorage('nemesis-data', defaultData)
export const useData = () => useAtom(dataAtom)