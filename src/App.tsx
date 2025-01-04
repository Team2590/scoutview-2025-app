import { Route, RouterProvider, createHashRouter, createRoutesFromElements } from 'react-router-dom'
import PastDataPage from './pages/PastDataPage'
import SettingsPage from './pages/SettingsPage'
import MainPage from './pages/MainPage'
import ErrorHandler from './components/ErrorHandler'

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
    return (
        <RouterProvider router={router} />
    )
}
