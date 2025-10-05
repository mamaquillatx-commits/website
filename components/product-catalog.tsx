"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const categories = [
  {
    name: "Recomendados",
    products: [
      {
        name: "Inca Kola 2L",
        image: "/ikp.png",
      },
      {
        name: "Sibarita - Ají Amarillo ",
        image: "/aas.png",
      },
      {
        name: " Doña Isabel - Chicha Morada ",
        image: "/cm.png",
      },
      {
        name: "Gloria - Panetón",
        image: "/pg.png",
      },
    ],
  },

  {
    name: "Condimentos y Ajíes",
    products: [
      {
        name: "Inca's Food - Aji Amarillo",
        image: "/icaa.png",
      },
      { name: "Inca's Food - Aji Panca", image: "/apc.png" },
      { name: "Inca's Food - Rocoto", image: "/rin.png" },
      {
        name: "Sibarita - Ají Amarillo",
        image: "/aas.png",
      },
    ],
  },
  {
    name: "Salsas y Conservas",

    products: [
      { name: "Inca's Food - Aceitunas", image: "/ast.jpg" },
      {
        name: "Inca's Food - Papa Amarilla",
        image: "/ppa.png",
      },
      {
        name: "Inca's Food - Maíz Chulpe",
        image: "/mzh.png",
      },
    ],
  },
  {
    name: "Bebidas y Licores",
    products: [
      {
        name: "Inca Kola 2 lts.",
        image: "/ic2k.png",
      },
      {
        name: "Inca Kola 300 ml. - 12 y 24 und.",
        image: "/ikp.png",
      },
      {
        name: "Doña Isabel - Chicha Moradaa",
        image: "/cm.png",
      },
      {
        name: "Bebida de Maracuyá",
        image: "/jm.png",
      },
    ],
  },
  {
    name: "Snacks y Dulces",
    products: [
      {
        name: "Gloria - Panetón",
        image: "/pg.png",
      },
      {
        name: "San José - Turrones .De temporada",
        image: "/ts.png",
      },
      {
        name: "Doña Pepa - Turrón De temporada",
        image: "/tp.png",
      },
      {
        name: "Alfajores",
        image: "/alf.png",
      },
      {
        name: "Lam's -  Tiras de Yuca",
        image: "/lty.png",
      },
      {
        name: "Lam's Tiras de Plátano",
        image: "/ltp.png",
      },
    ],
  },
];

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState(0);

  // 🔹 Redirige directamente al perfil de Instagram
  const handlePurchase = () => {
    window.open("https://www.instagram.com/mamaquillatx/shop", "_blank");
  };

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">
            Catálogo de Productos
          </h2>
          <p className="text-lg text-[#1C1C1C] max-w-2xl mx-auto">
            Explora nuestra selección completa de productos peruanos organizados
            por categoría
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              onClick={() => setActiveCategory(index)}
              variant={activeCategory === index ? "default" : "outline"}
              className={`${
                activeCategory === index
                  ? "bg-[#E63946] hover:bg-[#C9A227] text-white"
                  : "border-2 border-[#E5E5E5] text-[#1C1C1C] hover:border-[#E63946] hover:text-[#E63946]"
              } transition-all duration-300`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories[activeCategory].products.map((product, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-[#E5E5E5] hover:border-[#E63946] transition-all duration-300 hover:shadow-xl animate-fade-in"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden bg-white">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base mb-3 text-[#1C1C1C] min-h-[3rem]">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={handlePurchase}
                      size="sm"
                      className="bg-[#E63946] hover:bg-[#C9A227] text-white transition-colors duration-300"
                    >
                      Comprar ahora
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
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
