/// <reference types='vite/client' />
type NoteResult = 'Made' | 'Missed' | 'Not Attempted' | null

interface Data {
    matchNum: number | ''
    teamNum: number | ''
    scoutName: string
    startingPos: 'A' | 'B' | 'C' | 'D' | null
    autoCoralL1: number
    autoCoralL2: number
    autoCoralL3: number
    autoCoralL4: number
    autoAlgaeRemovedFromReef: number
    teleopCoralL1: number
    teleopCoralL2: number
    teleopCoralL3: number
    teleopCoralL4: number
    teleopProcessorAlgae: number
    teleopNetAlgae: number
    timeTakenToClimb: number
    lostComms: boolean
}