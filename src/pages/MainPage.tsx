import GetMatch from '../sections/GetMatch'
import Autonomous from '../sections/Autonomous'
import Teleoperated from '../sections/Teleoperated'
import Endgame from '../sections/Endgame'
import Export from '../sections/Export'

export default function MainPage() {
    // const [data] = useData()

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    return (
        <>
            <GetMatch />
            <Autonomous />
            <Teleoperated />
            <Endgame />
            <Export />
        </>
    )
}
