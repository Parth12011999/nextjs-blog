import { Home } from 'lucide-react'
import Link from 'next/link'
4
const Navbar = () => {
    return (
        <div className="navbar bg-slate-600">
            <div className="container">
            <div className="flex-1">
                <Link href={'/'} className="btn btn-ghost btn-ghost"><Home/></Link>
            </div>
            <div className="flex-none">
                <Link href={'/create'} className="btn btn-ghost">CREATE POST</Link>
            </div>
            </div>
        </div>
    )
}

export default Navbar
