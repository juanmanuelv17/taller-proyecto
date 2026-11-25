import Header from "../components/Header"
import Footer from "../components/Footer"

function FormPage() {
    return (
        <>
            <Header />
            <section id="contacto" className="relative h-screen w-full snap-start overflow-hidden bg-black text-[#FFE600] pt-20 pb-16 px-6 md:px-12 flex items-center justify-center border-t-4 border-[#FFE600]">

                <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                    {/* <!-- Formulario Brutalista --> */}
                    <div className="border-4 border-[#FFE600] p-6 md:p-8 flex flex-col gap-4 bg-black">
                        <span className="font-mono text-xs uppercase">[06] NUEVO PROYECTO</span>
                        <h2 className="text-3xl font-black uppercase">Enviar Brief</h2>

                        <input type="text" placeholder="NOMBRE / EMPRESA" className="w-full px-4 py-2.5 bg-black text-[#FFE600] placeholder-[#FFE600]/60 border-2 border-[#FFE600] font-mono text-xs font-bold focus:outline-none focus:bg-[#FFE600] focus:text-black" />
                        <input type="email" placeholder="EMAIL CORPORATIVO" className="w-full px-4 py-2.5 bg-black text-[#FFE600] placeholder-[#FFE600]/60 border-2 border-[#FFE600] font-mono text-xs font-bold focus:outline-none focus:bg-[#FFE600] focus:text-black" />
                        <input type="text" placeholder="SUPERFICIE ESTIMADA (M²)" className="w-full px-4 py-2.5 bg-black text-[#FFE600] placeholder-[#FFE600]/60 border-2 border-[#FFE600] font-mono text-xs font-bold focus:outline-none focus:bg-[#FFE600] focus:text-black" />

                        <button type="button" className="w-full py-3.5 bg-[#FFE600] text-black font-mono font-black text-sm uppercase tracking-wider border-2 border-[#FFE600] hover:bg-black hover:text-[#FFE600] transition-colors">
                            [SOLICITAR REUNIÓN]
                        </button>
                    </div>

                    {/* <!-- Bloque de Dirección --> */}
                    <div className="bg-[#FFE600] text-black border-4 border-[#FFE600] p-6 md:p-8 flex flex-col gap-5">
                        <div className="border-b-4 border-black pb-3">
                            <span className="font-mono text-xs font-black uppercase">SEDE INDUSTRIAL</span>
                            <h3 className="text-2xl font-black uppercase mt-1">Calle Industria 88, Nave 4</h3>
                        </div>

                        <div className="font-mono text-xs font-bold flex flex-col gap-2">
                            <p>HORARIO: LUNES A VIERNES // 08:00 – 19:00</p>
                            <p>TELÉFONO: +34 910 004 820</p>
                            <p>CORREO: PROYECTOS@MONOLITO.ARQ</p>
                        </div>

                        {/* <!-- Franja de advertencia industrial --> */}
                        <svg className="w-full h-6" preserveAspectRatio="none">
                            <defs>
                                <pattern id="hazard-bottom" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                                    <rect width="12" height="24" fill="#000000" />
                                    <rect x="12" width="12" height="24" fill="#FFE600" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#hazard-bottom)" />
                        </svg>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}

export default FormPage