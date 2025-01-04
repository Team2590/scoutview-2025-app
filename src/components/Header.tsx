export default function Header({ label }: { label: string }) {
    return (
        <div className='bg-secondary w-100 py-3 text-center'>
            <h2 className='h1'>{label}</h2>
        </div>
    )
}
