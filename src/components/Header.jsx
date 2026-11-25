import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black text-[#FFE600] border-b-4 border-[#FFE600] px-4 md:px-10 h-16 flex items-center justify-between">
            <Link to="#inicio" className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#FFE600] text-black flex items-center justify-center font-black text-lg border-2 border-[#FFE600]">
                    M
                </div>
                <span class="font-mono font-black text-sm md:text-base tracking-widest uppercase">MONOLITO // ARQ</span>
            </Link>
            <Navbar />
            <Link href="#contacto" class="px-4 py-1.5 bg-[#FFE600] text-black font-mono font-black text-xs uppercase tracking-wider border-2 border-[#FFE600] hover:bg-black hover:text-[#FFE600] transition-colors">
                [COTIZAR]
            </Link>
        </header>
    )
}

export default Header