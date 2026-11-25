import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div>
                <nav className="hidden lg:flex items-center gap-1 font-mono text-xs font-bold">
                    <Link to="/" className="px-2.5 py-1 border-2 border-[#FFE600] hover:bg-[#FFE600] hover:text-black transition-colors">[01] INICIO</Link>
                    <Link to="/code" className="px-2.5 py-1 border-2 border-[#FFE600] hover:bg-[#FFE600] hover:text-black transition-colors">[02] CÓDIGO</Link>
                    <Link to="/works" className="px-2.5 py-1 border-2 border-[#FFE600] hover:bg-[#FFE600] hover:text-black transition-colors">[03] OBRAS</Link>
                    <Link to="/phases" className="px-2.5 py-1 border-2 border-[#FFE600] hover:bg-[#FFE600] hover:text-black transition-colors">[04] FASES</Link>
                    <Link to="/dates" className="px-2.5 py-1 border-2 border-[#FFE600] hover:bg-[#FFE600] hover:text-black transition-colors">[05] DATOS</Link>
                    <Link to="/form" className="px-2.5 py-1 border-2 border-[#FFE600] hover:bg-[#FFE600] hover:text-black transition-colors">[06] BRIEF</Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar