import { Alliance, useAlliance } from '../data'

export default function Header({ label }: { label: string }) {
    const [alliance] = useAlliance()

    return (
        <div className={`bg-${alliance == Alliance.RED ? 'secondary' : 'blue-alliance'} w-100 py-3 text-center`}>
            <h2 className='h1'>{label}</h2>
        </div>
    )
}
