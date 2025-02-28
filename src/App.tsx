import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import PastDataPage from './pages/PastDataPage'
import SettingsPage from './pages/SettingsPage'
import MainPage from './pages/MainPage'
import ErrorHandler from './components/ErrorHandler'
import { Alliance, useAlliance, useAutoAssignTeams, useAutoIncrementMatches, useAutoRotateTeams, useData, useRobot, useTeams } from './data'
import { useEffect, useMemo } from 'react'

const router = createHashRouter(
    createRoutesFromElements(
        <Route errorElement={<ErrorHandler />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/past-data' element={<PastDataPage />} />
            <Route path='/settings' element={<SettingsPage />} />
        </Route>
    )
)

const getRobot = (matchNum: number, robotIndex: number, autoRotate: boolean) => autoRotate ? ((matchNum - 1) % 6) + robotIndex : robotIndex

export default function App() {
    const [data, setData] = useData()
    const [robot] = useRobot()
    const [_, setAlliance] = useAlliance()
    const [autoIncrementMatches] = useAutoIncrementMatches()
    const [autoAssignTeams] = useAutoAssignTeams()
    const [autoRotateTeams] = useAutoRotateTeams()
    const [teams] = useTeams()

    const actualRobot = useMemo(() => getRobot(data.matchNum as number, robot, autoRotateTeams), [data.matchNum, robot, autoRotateTeams])

    useEffect(() => {
        if (actualRobot < 3) setAlliance(Alliance.RED)
        else setAlliance(Alliance.BLUE)
    }, [data.matchNum, robot])

    useEffect(() => {
        if (autoIncrementMatches && autoAssignTeams) {
            setData(prev => {
                return { ...prev, teamNum: teams[data.matchNum as number - 1][actualRobot] }
            })
        }
    }, [data.matchNum])

    useEffect(() => {
        if (data.scoutName == 'Aryan Gaur') alert('Hello Sigma')
        if (data.scoutName == 'Shashank Madala') alert('I will not do hack Princeton with you')
        if (data.scoutName == 'Nikhil Agrawal') alert('Hello comp sci god')
        if (data.scoutName == 'Ahaan Khasnis') alert('Ahaan noooo!!!')
        if (data.scoutName == 'Ayur Munipalli') alert('Lock in plz 🙏🙏🙏')
    }, [data.scoutName])

    return (
        <RouterProvider router={router} />
    )
}