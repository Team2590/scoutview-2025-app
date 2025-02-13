import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import PastDataPage from './pages/PastDataPage'
import SettingsPage from './pages/SettingsPage'
import MainPage from './pages/MainPage'
import ErrorHandler from './components/ErrorHandler'
import { Alliance, useAlliance, useAutoAssignTeams, useAutoIncrementMatches, useData, useRobot, useTeams } from './data'
import { useEffect } from 'react'

const router = createHashRouter(
    createRoutesFromElements(
        <Route errorElement={<ErrorHandler />}>
            <Route path='/' element={<MainPage />} />
            <Route path='/past-data' element={<PastDataPage />} />
            <Route path='/settings' element={<SettingsPage />} />
        </Route>
    )
)

export default function App() {
    const [data, setData] = useData()
    const [robot] = useRobot()
    const [_, setAlliance] = useAlliance()
    const [autoIncrementMatches] = useAutoIncrementMatches()
    const [autoAssignTeams] = useAutoAssignTeams()
    const [teams] = useTeams()

    useEffect(() => {
        if (robot < 3) setAlliance(Alliance.RED)
        else setAlliance(Alliance.BLUE)
    }, [data.matchNum, robot])

    useEffect(() => {
        if (autoIncrementMatches == true && autoAssignTeams == true && data.matchNum != undefined && data.matchNum != '') {
            setData(prev => {
                return { ...prev, teamNum: teams[data.matchNum as number - 1][robot] }
            })
        }
    }, [data.matchNum])

    useEffect(() => {
        if (data.scoutName == 'Aryan Gaur') alert('Hello Sigma')
        if (data.scoutName == 'Shashank Madala') alert('I will not do hack Princeton with you')
        if (data.scoutName == 'Nikhil Agrawal') alert('Hello comp sci god')
    }, [data.scoutName])

    return (
        <RouterProvider router={router} />
    )
}