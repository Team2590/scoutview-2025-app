/// <reference types='vite/client' />
interface Data {
    matchNum: number | ''
    teamNum: number | ''
    scoutName: string
    startingPos: 'A' | 'B' | 'C' | null
    autoCoralL1: number
    autoCoralL2: number
    autoCoralL3: number
    autoCoralL4: number
    autoAlgaeRemovedFromReef: number
    autoProcessorAlgae: number
    autoNetAlgae: number
    teleopAlgaeRemovedFromReef: number
    teleopCoralL1: number
    teleopCoralL2: number
    teleopCoralL3: number
    teleopCoralL4: number
    teleopProcessorAlgae: number
    teleopNetAlgae: number
    timeTakenToClimb: number
    lostComms: boolean | null
}