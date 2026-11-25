import Header from "../components/Header"
import Footer from "../components/Footer"

function WorksPage() {
    return (
        <>
            <Header />
            <section id="obras" className="relative h-screen w-full snap-start overflow-hidden bg-[#FFE600] text-black pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-black">

                <div className="max-w-6xl w-full flex flex-col gap-5">
                    <div className="flex flex-wrap items-end justify-between border-b-4 border-black pb-3 gap-2">
                        <div>
                            <span className="font-mono text-xs font-black uppercase tracking-widest">[03] PORTAFOLIO</span>
                            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Obras Construidas</h2>
                        </div>
                        <span className="font-mono text-xs bg-black text-[#FFE600] px-3 py-1 font-black uppercase">2023 — 2026</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                        {/* <!-- Obra 1 --> */}
                        <div className="bg-black text-[#FFE600] border-4 border-black p-4 flex flex-col justify-between gap-3">
                            <div className="border-2 border-[#FFE600] bg-[#FFE600] h-40 flex items-center justify-center p-4">
                                <svg className="w-full h-full" viewBox="0 0 180 120" fill="none">
                                    <rect x="35" y="15" width="50" height="95" fill="#000" />
                                    <rect x="95" y="40" width="50" height="70" fill="#000" />
                                    <line x1="20" y1="110" x2="160" y2="110" stroke="#000" stroke-width="4" />
                                    <rect x="45" y="25" width="30" height="10" fill="#FFE600" />
                                    <rect x="45" y="45" width="30" height="10" fill="#FFE600" />
                                    <rect x="45" y="65" width="30" height="10" fill="#FFE600" />
                                </svg>
                            </div>
                            <div>
                                <div className="flex justify-between font-mono text-[11px] mb-1">
                                    <span>RESIDENCIAL</span>
                                    <span>4,200 M²</span>
                                </div>
                                <h3 className="font-black text-xl uppercase">Torre K-09</h3>
                                <p className="font-mono text-xs mt-1 text-[#FFE600]">Vivienda vertical modular en hormigón prefabricado.</p>
                            </div>
                        </div>

                        {/* <!-- Obra 2 --> */}
                        <div className="bg-black text-[#FFE600] border-4 border-black p-4 flex flex-col justify-between gap-3">
                            <div className="border-2 border-[#FFE600] bg-[#FFE600] h-40 flex items-center justify-center p-4">
                                <svg className="w-full h-full" viewBox="0 0 180 120" fill="none">
                                    <polygon points="20,105 90,25 160,105" fill="#000" />
                                    <rect x="70" y="65" width="40" height="40" fill="#FFE600" />
                                    <line x1="15" y1="105" x2="165" y2="105" stroke="#000" stroke-width="4" />
                                </svg>
                            </div>
                            <div>
                                <div className="flex justify-between font-mono text-[11px] mb-1">
                                    <span>CULTURAL</span>
                                    <span>1,850 M²</span>
                                </div>
                                <h3 className="font-black text-xl uppercase">Pabellón Sur</h3>
                                <p className="font-mono text-xs mt-1 text-[#FFE600]">Centro de exposiciones con cubierta prismática ciega.</p>
                            </div>
                        </div>

                        {/* <!-- Obra 3 --> */}
                        <div className="bg-black text-[#FFE600] border-4 border-black p-4 flex flex-col justify-between gap-3">
                            <div className="border-2 border-[#FFE600] bg-[#FFE600] h-40 flex items-center justify-center p-4">
                                <svg className="w-full h-full" viewBox="0 0 180 120" fill="none">
                                    <rect x="25" y="55" width="130" height="50" fill="#000" />
                                    <rect x="65" y="25" width="90" height="30" fill="#000" />
                                    <rect x="35" y="70" width="45" height="20" fill="#FFE600" />
                                    <line x1="15" y1="105" x2="165" y2="105" stroke="#000" stroke-width="4" />
                                </svg>
                            </div>
                            <div>
                                <div className="flex justify-between font-mono text-[11px] mb-1">
                                    <span>PRIVADO</span>
                                    <span>640 M²</span>
                                </div>
                                <h3 className="font-black text-xl uppercase">Casa Búnker</h3>
                                <p className="font-mono text-xs mt-1 text-[#FFE600]">Residencia monolítica con patio interior excavado.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default WorksPage