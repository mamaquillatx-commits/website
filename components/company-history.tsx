import Image from "next/image"

export default function CompanyHistory() {
  return (
    <section id="historia" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#E63946]">Nuestra Historia</h2>
          <p className="text-lg text-[#333333] max-w-3xl mx-auto">
            Un viaje de sabor, tradición y conexión con nuestras raíces
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1C1C1C]">El Comienzo</h3>
              <p className="text-[#1C1C1C] leading-relaxed">
                Mama Quilla nació del amor por nuestra tierra y la nostalgia de los sabores que dejamos atrás. Fundada
                por peruanos que viven en Estados Unidos, entendemos la importancia de mantener viva nuestra cultura a
                través de los productos que nos recuerdan a casa.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1C1C1C]">Nuestra Misión</h3>
              <p className="text-[#1C1C1C] leading-relaxed">
                Nos dedicamos a traer lo mejor del Perú directamente a tu hogar. Cada producto es cuidadosamente
                seleccionado para garantizar la autenticidad y calidad que mereces. Desde el ají amarillo hasta la
                quinoa orgánica, cada artículo cuenta una historia de tradición y excelencia.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#1C1C1C]">Nuestro Compromiso</h3>
              <p className="text-[#1C1C1C] leading-relaxed">
                Trabajamos directamente con productores peruanos para asegurar que cada producto mantenga su sabor
                auténtico y apoye a las comunidades locales. Mama Quilla es más que una tienda, es un puente entre dos
                mundos, manteniendo vivas nuestras tradiciones mientras construimos nuevos recuerdos en tierras lejanas.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image src="/peruvian-traditional-market-colorful-products-auth.jpg" alt="Historia de Mama Quilla" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#C9A227] text-[#1C1C1C] p-6 rounded-lg shadow-xl max-w-xs">
              <p className="font-bold text-3xl mb-2">2020</p>
              <p className="text-sm">Año de fundación, conectando corazones peruanos en USA</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-[#F9F9F9] rounded-lg">
            <div className="text-4xl font-bold text-[#E63946] mb-2">500+</div>
            <p className="text-[#1C1C1C] font-semibold">Productos Auténticos</p>
          </div>
          <div className="text-center p-6 bg-[#F9F9F9] rounded-lg">
            <div className="text-4xl font-bold text-[#E63946] mb-2">10,000+</div>
            <p className="text-[#1C1C1C] font-semibold">Clientes Satisfechos</p>
          </div>
          <div className="text-center p-6 bg-[#F9F9F9] rounded-lg">
            <div className="text-4xl font-bold text-[#E63946] mb-2">50+</div>
            <p className="text-[#1C1C1C] font-semibold">Productores Peruanos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
