import { atom, useAtom } from 'jotai'
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
    timeTakenToClimb: 0,
    teleopProcessorAlgae: 0,
    teleopNetAlgae: 0,
    lostComms: false
}

export enum Alliance {
    RED = 1,
    BLUE = 2
}

interface CompName {
    name: string
    key: string
}

export const dataAtom = atomWithStorage('nemesis-data', defaultData)
export const allianceAtom = atomWithStorage('alliance', Alliance.RED)
export const autoIncrementMatchesAtom = atomWithStorage('auto-increment', false)
export const localDataAtom = atomWithStorage('use-local-data', false)
export const autoAssignTeamsAtoms = atomWithStorage('auto-assign-teams', false)
export const teamsAtom = atomWithStorage('teams', [] as number[][])
export const compNamesAtom = atomWithStorage('comp-names', [] as CompName[])
export const compName = atomWithStorage('comp-name', '')
export const robotAtom = atomWithStorage('robot', 0 as number)
export const useData = () => useAtom(dataAtom)
export const useAlliance = () => useAtom(allianceAtom)
export const useAutoIncrementMatches = () => useAtom(autoIncrementMatchesAtom)
export const useLocalData = () => useAtom(localDataAtom)
export const useAutoAssignTeams = () => useAtom(autoAssignTeamsAtoms)
export const useHaveTeams = () => Boolean(teamsAtom)
export const useTeams = () => useAtom(teamsAtom)
export const useCompNames = () => useAtom(compNamesAtom)
export const useRobot = () => useAtom(robotAtom)
export const useCompName = () => useAtom(compName)