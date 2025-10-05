import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ana M.",
    location: "Miami, FL",
    text: "Por fin encontré el ají amarillo que tanto extrañaba para mi causa. ¡El sabor es idéntico al de Perú!",
    image: "/sf.png",
  },
  {
    name: "Carlos P.",
    location: "Los Angeles, CA",
    text: "La entrega fue rapidísima y todo llegó en perfecto estado. ¡Volveré a comprar sin duda!",
    image: "/crls.png",
  },
  {
    name: "Sofía V.",
    location: "New York, NY",
    text: "Me emociona tener mi Inka Kola en casa. Es como si estuviera nuevamente en Lima. ¡Gracias por el servicio!",
    image: "/ana.png",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-24 h-1 bg-[#E63946] mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up bg-white"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-[#E63946] mb-4" />
                <p className="text-lg text-[#1C1C1C] mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1C1C1C]">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#1C1C1C]/70">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
