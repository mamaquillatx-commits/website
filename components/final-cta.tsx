"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram, Facebook } from "lucide-react";

export default function FinalCTA() {
  const handleStartShopping = () => {
    window.open(
      "https://wa.me/15122033079?text=Hola,%20quiero%20empezar%20mi%20compra",
      "_blank"
    );
  };

  return (
    <section id="contacto" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up text-[#1C1C1C]">
          ¿Listo para revivir los sabores de casa?
        </h2>
        <p className="text-xl md:text-2xl mb-10 text-[#333333] leading-relaxed animate-slide-up">
          No esperes más. Explora nuestra tienda y descubre por qué somos la
          mejor opción para tus antojos peruanos.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={() =>
              window.open(
                "https://www.instagram.com/mamaquillatx/shop",
                "_blank"
              )
            }
            size="lg"
            className="bg-[#E63946] hover:bg-[#C9A227] text-white hover:text-[#1C1C1C] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Empezar mi compra
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="https://wa.me/15122033079"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#1C1C1C] hover:text-[#C9A227] transition-colors duration-300"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="font-semibold">WhatsApp: +1 512-203-3079</span>
          </a>
          <a
            href="https://www.instagram.com/mamaquillatx/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#1C1C1C] hover:text-[#C9A227] transition-colors duration-300"
          >
            <Instagram className="w-6 h-6" />
            <span className="font-semibold">@mamaquillatx</span>
          </a>
          <a
            href="https://www.facebook.com/mamaquillaustin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#1C1C1C] hover:text-[#C9A227] transition-colors duration-300"
          >
            <Facebook className="w-6 h-6" />
            <span className="font-semibold">Mama Quilla TX</span>
          </a>
        </div>
      </div>
    </section>
  );
}
