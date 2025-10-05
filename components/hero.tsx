"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    url: "/peruvian-products-colorful-display.jpg",
    alt: "Productos peruanos auténticos",
  },
  {
    url: "/inca-kola-bottles-peruvian-snacks.jpg",
    alt: "Inca Kola y snacks peruanos",
  },
  {
    url: "/peruvian-food-ingredients-aji-amarillo.jpg",
    alt: "Ingredientes peruanos tradicionales",
  },
  {
    url: "/peruvian-cultural-scene-machu-picchu.jpg",
    alt: "Cultura peruana",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
  };

  const handleCTAClick = () => {
    window.open(
      "https://wa.me/15122033079?text=Hola,%20quiero%20explorar%20el%20catálogo%20de%20productos",
      "_blank"
    );
  };

  return (
    <section
      id="inicio"
      className="relative h-[90vh] min-h-[600px] overflow-hidden bg-white"
    >
      {/* Carousel Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 blur-xs ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.url || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-200 to-transparent" />
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-[#1C1C1C]" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-[#1C1C1C]" />
      </button>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start max-w-7xl">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#1C1C1C] mb-6 animate-slide-up max-w-3xl leading-tight">
          El sabor de Perú, directo a tu casa
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-[#333333] mb-8 animate-slide-up max-w-2xl leading-relaxed">
          Descubre los sabores que extrañas. Todos tus productos peruanos
          favoritos, ahora a un solo clic de distancia.
        </p>

        {/* CTA Button */}
        <Button
          onClick={handleCTAClick}
          size="lg"
          className="bg-[#E63946] hover:bg-[#C9A227] text-white hover:text-[#1C1C1C] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          Explorar Catálogo
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#C9A227] w-8" : "bg-[#1C1C1C]/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
