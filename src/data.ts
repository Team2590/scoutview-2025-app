import { useAtom } from 'jotai'
import { atomWithStorage } from "jotai/utils"
import { z } from 'zod'

export const defaultData: Data = {
    matchNum: '',
    teamNum: '',
    scoutName: 'Blank',
    startingPos: null,
    autoCoralL1: 0,
    autoCoralL2: 0,
    autoCoralL3: 0,
    autoCoralL4: 0,
    autoAlgaeRemovedFromReef: 0,
    autoProcessorAlgae: 0,
    autoNetAlgae: 0,
    teleopCoralL1: 0,
    teleopCoralL2: 0,
    teleopCoralL3: 0,
    teleopCoralL4: 0,
    teleopAlgaeRemovedFromReef: 0,
    teleopProcessorAlgae: 0,
    teleopNetAlgae: 0,
    timeTakenToClimb: 0,
    lostComms: null
}

export const DataSchema = z.object({
    matchNum: z.coerce.number().default(0),
    teamNum: z.coerce.number().default(0),
    scoutName: z.coerce.string().default("blank"),
    startingPos: z.enum(['A', 'B', 'C']).nullable(),
    autoCoralL1: z.coerce.number(),
    autoCoralL2: z.coerce.number(),
    autoCoralL3: z.coerce.number(),
    autoCoralL4: z.coerce.number(),
    autoAlgaeRemovedFromReef: z.coerce.number(),
    autoProcessorAlgae: z.coerce.number(),
    autoNetAlgae: z.coerce.number(),
    teleopCoralL1: z.coerce.number(),
    teleopCoralL2: z.coerce.number(),
    teleopCoralL3: z.coerce.number(),
    teleopCoralL4: z.coerce.number(),
    teleopAlgaeRemovedFromReef: z.coerce.number(),
    teleopProcessorAlgae: z.coerce.number(),
    teleopNetAlgae: z.coerce.number(),
    timeTakenToClimb: z.coerce.number(),
    lostComms: z.union([z.null(), z.boolean()]).default(null),
})

export enum Alliance {
    RED = 1,
    BLUE = 2
}

interface CompName {
    name: string
    key: string
}

const dataAtom = atomWithStorage('nemesis-data', defaultData)
const allianceAtom = atomWithStorage('alliance', Alliance.RED)
const autoIncrementMatchesAtom = atomWithStorage('auto-increment', false)
const localDataAtom = atomWithStorage('use-local-data', false)
const autoAssignTeamsAtoms = atomWithStorage('auto-assign-teams', false)
const teamsAtom = atomWithStorage('teams', [] as number[][])
const compNamesAtom = atomWithStorage('comp-names', [] as CompName[])
const compName = atomWithStorage('comp-name', '')
const robotAtom = atomWithStorage('robot', 0 as number)
const pastDataAtom = atomWithStorage('nemesis-past-data', [] as Data[])
const fieldFlippedAtom = atomWithStorage('field-flipped', false)
const autoRotateTeamsAtom = atomWithStorage('auto-rotate-teams', false)

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
export const usePastData = () => {
    const [pastData, setPastData] = useAtom(pastDataAtom)

    const add = (data: Data) => {
        if (pastData.length >= 5) {
            const newData = [...pastData.slice(0, 4), data]
            setPastData(newData)
        } else {
            setPastData(prev => [...prev, data])
        }
    }

    return [pastData, add] as const
}
export const useFieldFlipped = () => useAtom(fieldFlippedAtom)
export const useAutoRotateTeams = () => useAtom(autoRotateTeamsAtom)