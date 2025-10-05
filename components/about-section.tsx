"use client";

import { Button } from "@/components/ui/button";
import { Heart, Truck, Shield } from "lucide-react";

export default function AboutSection() {
  const handleLearnMore = () => {
    window.open(
      "https://wa.me/15122033079?text=Hola,%20quiero%20conocer%20más%20sobre%20Mama%20Quilla",
      "_blank"
    );
  };

  return (
    <section id="sobre-nosotros" className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#E63946] mb-6">
              ¿Quiénes somos?
            </h2>
            <p className="text-lg text-[#1C1C1C] leading-relaxed mb-6">
              En Mama Quilla llevamos la auténtica esencia del Perú directamente
              a tu casa. Somos apasionados por compartir los sabores que nos
              unen: desde el ají amarillo y las aceitunas botija, hasta los
              turrones y bebidas que evocan tradición y alegría.
            </p>
            <p className="text-lg text-[#1C1C1C] leading-relaxed mb-8">
              Seleccionamos cada producto con el corazón y con los más altos
              estándares de calidad, para que disfrutes una experiencia genuina,
              sin importar dónde te encuentres.
            </p>
            <p className="text-lg text-[#1C1C1C] leading-relaxed mb-8">
              Nuestra tienda online es simple, segura y con envíos a todo el
              país porque el verdadero sabor peruano no conoce fronteras.
            </p>
            <p className="text-lg text-[#1C1C1C] leading-relaxed mb-8">
              Mama Quilla: más que productos, compartimos historias y celebramos
              nuestra herencia culinaria.
            </p>
            <Button
              onClick={handleLearnMore}
              size="lg"
              className="bg-[#C9A227] hover:bg-[#E63946] text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Conócenos más
            </Button>
          </div>

          <div className="grid gap-6">
            <div className="flex gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#E63946]/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#E63946]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-[#1C1C1C]">
                  Productos Auténticos
                </h3>
                <p className="text-[#1C1C1C]">
                  Garantizamos la autenticidad de cada producto.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#C9A227]/10 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-[#C9A227]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-[#1C1C1C]">
                  Envíos Rápidos
                </h3>
                <p className="text-[#1C1C1C]">
                  Entrega en 2-5 días hábiles a todo Estados Unidos. Tu pedido
                  llega fresco y seguro.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-[#4CAF50]/10 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#4CAF50]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2 text-[#1C1C1C]">
                  Compra Segura
                </h3>
                <p className="text-[#1C1C1C]">
                  Pagos 100% seguros y garantía de satisfacción en todos tus
                  pedidos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
