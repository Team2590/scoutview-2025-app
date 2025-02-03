import { Alliance, useAlliance } from '../data'

export default function Header({ label }: { label: string }) {
    const [alliance] = useAlliance()

    return (
        <div className={`bg-${alliance == Alliance.RED ? 'red-alliance' : 'blue-alliance'}-secondary w-100 py-3 text-center`}>
            <h2 className='h1'>{label}</h2>
        </div>
    )
}
