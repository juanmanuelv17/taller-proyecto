import Header from "../components/Header"
import Footer from "../components/Footer"

function PhasesPage() {
    return (
        <>
            <Header />
            <section id="proceso" className="relative h-screen w-full snap-start overflow-hidden bg-black text-[#FFE600] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-[#FFE600]">

                <div className="max-w-6xl w-full flex flex-col gap-6">
                    <div className="flex flex-wrap items-end justify-between border-b-4 border-[#FFE600] pb-3 gap-2">
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest">[04] METODOLOGÍA</span>
                            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Proceso Constructivo</h2>
                        </div>
                        <span className="font-mono text-xs border-2 border-[#FFE600] px-3 py-1 font-bold uppercase">LLAVE EN MANO</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-4 border-[#FFE600]">
                        <div className="p-5 border-b-4 sm:border-b-4 lg:border-b-0 sm:border-r-4 border-[#FFE600] flex flex-col justify-between gap-4">
                            <span className="font-mono text-xs bg-[#FFE600] text-black px-2 py-0.5 self-start font-black">FASE 01</span>
                            <div>
                                <h3 className="font-black text-xl uppercase">Topografía</h3>
                                <p className="font-mono text-xs mt-2">Estudio geotécnico del terreno, orientación solar y cargas estructurales.</p>
                            </div>
                            <span className="font-mono text-xs opacity-75">SEMANAS 1–3</span>
                        </div>

                        <div className="p-5 border-b-4 lg:border-b-0 lg:border-r-4 border-[#FFE600] flex flex-col justify-between gap-4">
                            <span className="font-mono text-xs bg-[#FFE600] text-black px-2 py-0.5 self-start font-black">FASE 02</span>
                            <div>
                                <h3 className="font-black text-xl uppercase">Cálculo</h3>
                                <p className="font-mono text-xs mt-2">Modelado BIM completo y cálculo de armaduras de acero de alta resistencia.</p>
                            </div>
                            <span className="font-mono text-xs opacity-75">SEMANAS 4–8</span>
                        </div>

                        <div className="p-5 border-b-4 sm:border-b-0 sm:border-r-4 border-[#FFE600] flex flex-col justify-between gap-4">
                            <span className="font-mono text-xs bg-[#FFE600] text-black px-2 py-0.5 self-start font-black">FASE 03</span>
                            <div>
                                <h3 className="font-black text-xl uppercase">Encofrado</h3>
                                <p className="font-mono text-xs mt-2">Vertido continuo de hormigón visto con control milimétrico de juntas.</p>
                            </div>
                            <span className="font-mono text-xs opacity-75">MESES 3–8</span>
                        </div>

                        <div className="p-5 flex flex-col justify-between gap-4 bg-[#FFE600] text-black">
                            <span className="font-mono text-xs bg-black text-[#FFE600] px-2 py-0.5 self-start font-black">FASE 04</span>
                            <div>
                                <h3 className="font-black text-xl uppercase">Entrega</h3>
                                <p className="font-mono text-xs mt-2 font-bold">Pruebas de carga, certificación energética y entrega de llaves.</p>
                            </div>
                            <span className="font-mono text-xs font-black">OBRA LISTA</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default PhasesPage