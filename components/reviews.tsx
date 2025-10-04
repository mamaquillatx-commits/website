"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Juan R.",
    rating: 5,
    text: "Excelente servicio, pedí mi Panetón Gloria y llegó en 2 días. ¡Auténtico sabor peruano!",
  },
  {
    name: "María F.",
    rating: 5,
    text: "Me encantó el turrón Doña Pepa, me hizo sentir en familia. 100% recomendado.",
  },
  {
    name: "Diego C.",
    rating: 4,
    text: "Todo muy bueno, me hubiera gustado más variedad en snacks, pero llegó rapidísimo.",
  },
  {
    name: "Patricia L.",
    rating: 5,
    text: "La Inca Kola sabe exactamente como la recuerdo. ¡Gracias Mama Quilla!",
  },
  {
    name: "Roberto M.",
    rating: 5,
    text: "Productos de calidad y atención al cliente excepcional. Muy satisfecho.",
  },
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const visibleReviews = [
    reviews[currentIndex],
    reviews[(currentIndex + 1) % reviews.length],
    reviews[(currentIndex + 2) % reviews.length],
  ]

  return (
    <section id="opiniones" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">Opiniones de nuestros clientes</h2>
          <p className="text-lg text-[#1C1C1C]">
            Más de 500 clientes en todo Estados Unidos ya disfrutan de los sabores del Perú con Mama Quilla
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {visibleReviews.map((review, index) => (
            <Card
              key={`${review.name}-${index}`}
              className="border-2 border-[#E5E5E5] hover:border-[#E63946] transition-all duration-300 animate-fade-in"
            >
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < review.rating ? "fill-[#C9A227] text-[#C9A227]" : "text-[#E5E5E5]"}`}
                    />
                  ))}
                </div>
                <p className="text-[#1C1C1C] mb-4 leading-relaxed">"{review.text}"</p>
                <p className="font-semibold text-[#1C1C1C]">– {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#C9A227] w-8" : "bg-[#E5E5E5]"
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
