/// <reference types='vite/client' />
type NoteResult = 'Made' | 'Missed' | 'Not Attempted' | null

interface Data {
    matchNum: number | ''
    teamNum: number | ''
    scoutName: string
    startingPos: 'A' | 'B' | 'C' | 'D' | null
    leaveWing: 'true' | 'false' | null
    spkrMade_atn: number
    spkrMissed_atn: number
    ampMade_atn: number
    ampMissed_atn: number
    spkrMade_tp: number
    spkrMissed_tp: number
    ampMade_tp: number
    ampMissed_tp: number
    coopertition: 'true' | 'false' | null
    climbLvl: 'Parked' | 'Climb' | 'Mic' | 'N/A' | null
    trap: number | null
    traverse: 'true' | 'false' | null
    twoRobot: 'true' | 'false' | null
    droppedHit: 'true' | 'false' | null
    notesFed: number
    preloadNote: NoteResult
    notes: NoteResult[]
}