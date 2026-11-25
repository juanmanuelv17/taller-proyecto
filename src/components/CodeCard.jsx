import CodePage from "../pages/CodePage"

function CodeCard() {
    return (
        <>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div class="border-4 border-[#FFE600] p-5 flex flex-col gap-2 bg-black hover:bg-[#FFE600] hover:text-black transition-colors group">
                    <span class="font-mono font-black text-3xl">01 //</span>
                    <h3 class="font-black text-xl uppercase">Verdad Material</h3>
                    <p class="font-mono text-xs leading-relaxed">El hormigón visto, el acero sin pintar y la madera cruda muestran exactamente cómo se sostiene el edificio.</p>
                </div>

                <div class="border-4 border-[#FFE600] p-5 flex flex-col gap-2 bg-black hover:bg-[#FFE600] hover:text-black transition-colors group">
                    <span class="font-mono font-black text-3xl">02 //</span>
                    <h3 class="font-black text-xl uppercase">Geometría Cruda</h3>
                    <p class="font-mono text-xs leading-relaxed">Volúmenes puros, ángulos rectos y voladizos audaces que desafían la gravedad sin disfraces.</p>
                </div>

                <div class="border-4 border-[#FFE600] p-5 flex flex-col gap-2 bg-black hover:bg-[#FFE600] hover:text-black transition-colors group">
                    <span class="font-mono font-black text-3xl">03 //</span>
                    <h3 class="font-black text-xl uppercase">Luz Como Material</h3>
                    <p class="font-mono text-xs leading-relaxed">Aberturas estratégicas que cortan el bloque sólido y generan sombras dramáticas durante el día.</p>
                </div>

                <div class="border-4 border-[#FFE600] p-5 flex flex-col gap-2 bg-black hover:bg-[#FFE600] hover:text-black transition-colors group">
                    <span class="font-mono font-black text-3xl">04 //</span>
                    <h3 class="font-black text-xl uppercase">Cero Ruido</h3>
                    <p class="font-mono text-xs leading-relaxed">Eliminamos todo elemento decorativo superfluo para priorizar la durabilidad y la función total.</p>
                </div>
            </div>
        </>
    )
}

export default CodeCard