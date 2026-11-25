import Header from "../components/Header"
import Footer from "../components/Footer"
import CodeCard from "../components/CodeCard"

function CodePage() {
    return (
        <>
            <Header />
            <section id="principios" className="relative h-screen w-full snap-start overflow-hidden bg-black text-[#FFE600] pt-20 pb-16 px-6 md:px-12 flex flex-col items-center justify-center border-t-4 border-[#FFE600]">

                <div className="max-w-6xl w-full flex flex-col gap-6">
                    <div className="flex flex-wrap items-end justify-between border-b-4 border-[#FFE600] pb-3 gap-2">
                        <div>
                            <span className="font-mono text-xs uppercase tracking-widest">[02] MANIFIESTO</span>
                            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">Código Estructural</h2>
                        </div>
                        <span className="font-mono text-xs bg-[#FFE600] text-black px-3 py-1 font-black uppercase">4 REGLAS INQUEBRANTABLES</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="border-4 border-[#FFE600] p-5 flex flex-col gap-2 bg-black hover:bg-[#FFE600] hover:text-black transition-colors group">
                            <span className="font-mono font-black text-3xl">01 //</span>
                            <h3 className="font-black text-xl uppercase">Verdad Material</h3>
                            <p className="font-mono text-xs leading-relaxed">El hormigón visto, el acero sin pintar y la madera cruda muestran exactamente cómo se sostiene el edificio.</p>
                        </div>

                        <div className="border-4 border-[#FFE600] p-5 flex flex-col gap-2 bg-black hover:bg-[#FFE600] hover:text-black transition-colors group">
                            <span className="font-mono font-black text-3xl">02 //</span>
                            <h3 className="font-black text-xl uppercase">Geometría Cruda</h3>
                            <p className="font-mono text-xs leading-relaxed">Volúmenes puros, ángulos rectos y voladizos audaces que desafían la gravedad sin disfraces.</p>
                        </div>

                        <div className="border-4 border-[#FFE600] p-5 flex flex-col gap-2 bg-black hover:bg-[#FFE600] hover:text-black transition-colors group">
                            <span className="font-mono font-black text-3xl">03 //</span>
                            <h3 className="font-black text-xl uppercase">Luz Como Material</h3>
                            <p className="font-mono text-xs leading-relaxed">Aberturas estratégicas que cortan el bloque sólido y generan sombras dramáticas durante el día.</p>
                        </div>

                        <div className="border-4 border-[#FFE600] p-5 flex flex-col gap-2 bg-black hover:bg-[#FFE600] hover:text-black transition-colors group">
                            <span className="font-mono font-black text-3xl">04 //</span>
                            <h3 className="font-black text-xl uppercase">Cero Ruido</h3>
                            <p className="font-mono text-xs leading-relaxed">Eliminamos todo elemento decorativo superfluo para priorizar la durabilidad y la función total.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}

export default CodePage