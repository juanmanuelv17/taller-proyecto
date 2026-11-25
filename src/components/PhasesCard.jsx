import PhasesPage from "../pages/PhasesPage"


function PhasesCard() {
    return (
        <>
            <PhasesPage />
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-4 border-[#FFE600]">
                <div class="p-5 border-b-4 sm:border-b-4 lg:border-b-0 sm:border-r-4 border-[#FFE600] flex flex-col justify-between gap-4">
                    <span class="font-mono text-xs bg-[#FFE600] text-black px-2 py-0.5 self-start font-black">FASE 01</span>
                    <div>
                        <h3 class="font-black text-xl uppercase">Topografía</h3>
                        <p class="font-mono text-xs mt-2">Estudio geotécnico del terreno, orientación solar y cargas estructurales.</p>
                    </div>
                    <span class="font-mono text-xs opacity-75">SEMANAS 1–3</span>
                </div>

                <div class="p-5 border-b-4 lg:border-b-0 lg:border-r-4 border-[#FFE600] flex flex-col justify-between gap-4">
                    <span class="font-mono text-xs bg-[#FFE600] text-black px-2 py-0.5 self-start font-black">FASE 02</span>
                    <div>
                        <h3 class="font-black text-xl uppercase">Cálculo</h3>
                        <p class="font-mono text-xs mt-2">Modelado BIM completo y cálculo de armaduras de acero de alta resistencia.</p>
                    </div>
                    <span class="font-mono text-xs opacity-75">SEMANAS 4–8</span>
                </div>

                <div class="p-5 border-b-4 sm:border-b-0 sm:border-r-4 border-[#FFE600] flex flex-col justify-between gap-4">
                    <span class="font-mono text-xs bg-[#FFE600] text-black px-2 py-0.5 self-start font-black">FASE 03</span>
                    <div>
                        <h3 class="font-black text-xl uppercase">Encofrado</h3>
                        <p class="font-mono text-xs mt-2">Vertido continuo de hormigón visto con control milimétrico de juntas.</p>
                    </div>
                    <span class="font-mono text-xs opacity-75">MESES 3–8</span>
                </div>

                <div class="p-5 flex flex-col justify-between gap-4 bg-[#FFE600] text-black">
                    <span class="font-mono text-xs bg-black text-[#FFE600] px-2 py-0.5 self-start font-black">FASE 04</span>
                    <div>
                        <h3 class="font-black text-xl uppercase">Entrega</h3>
                        <p class="font-mono text-xs mt-2 font-bold">Pruebas de carga, certificación energética y entrega de llaves.</p>
                    </div>
                    <span class="font-mono text-xs font-black">OBRA LISTA</span>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default PhasesCard