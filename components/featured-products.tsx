"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Sparkles } from "lucide-react";

const featuredProducts = [
  {
    name: "Inca Kola 2L",
    description: "LA BEBIDA DEL PERÚ",
    tagline: "Sabor único que nunca olvidarás",
    image: "/inca-kola-bottle-2-liter.jpg",
    price: "$4.99",
    discount: null,
    featured: true,
    bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
  },
  {
    name: "Ají Amarillo Premium",
    description: "Hasta 20% de descuento",
    image: "/aji-amarillo-paste-jar.jpg",
    price: "$3.49",
    discount: "20% OFF",
    featured: false,
    bgColor: "bg-gradient-to-br from-red-50 to-orange-50",
  },
  {
    name: "Chicha Morada Artesanal",
    description: "50% de descuento en bebidas frescas",
    image: "/chicha-morada-bottle.jpg",
    price: "$5.99",
    discount: "50% OFF",
    featured: false,
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-50",
  },
];

export default function FeaturedProducts() {
  const handlePurchase = (productName: string, price: string) => {
    const message = `Hola, me interesa comprar: ${productName} - ${price}`;
    window.open(
      `https://wa.me/15122033079?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const mainProduct = featuredProducts[0];
  const sideProducts = featuredProducts.slice(1);

  return (
    <section id="productos" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">
            Recomendados
          </h2>
          <div className="w-24 h-1 bg-[#E63946] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Featured Product - Large Card */}
          <Card
            className={`lg:col-span-2 group overflow-hidden border-2 border-[#E5E5E5] hover:border-[#E63946] transition-all duration-300 hover:shadow-2xl ${mainProduct.bgColor}`}
          >
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-0 min-h-[400px]">
                {/* Left side - Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-[#C9A227]" />
                    <span className="text-sm font-semibold text-[#C9A227] uppercase tracking-wider">
                      Producto Destacado
                    </span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#1C1C1C] mb-3 leading-tight">
                    {mainProduct.name}
                  </h3>
                  <p className="text-sm text-[#333333] uppercase tracking-wide mb-2 font-semibold">
                    {mainProduct.description}
                  </p>
                  <p className="text-[#333333] mb-6 leading-relaxed">
                    {mainProduct.tagline}
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl font-bold text-[#E63946]">
                      {mainProduct.price}
                    </span>
                  </div>
                  <Button
                    onClick={() =>
                      handlePurchase(mainProduct.name, mainProduct.price)
                    }
                    className="bg-[#E63946] hover:bg-[#C9A227] text-white px-8 py-6 text-lg font-semibold transition-all duration-300 w-fit group-hover:scale-105"
                  >
                    Comprar Ahora
                    <ShoppingCart className="w-5 h-5 ml-2" />
                  </Button>
                </div>

                {/* Right side - Image */}
                <div className="relative min-h-[300px] md:min-h-[400px] overflow-hidden">
                  <Image
                    src={mainProduct.image || "/placeholder.svg"}
                    alt={mainProduct.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Side Products - Stacked Cards */}
          <div className="flex flex-col gap-6">
            {sideProducts.map((product, index) => (
              <Card
                key={index}
                className={`group overflow-hidden border-2 border-[#E5E5E5] hover:border-[#E63946] transition-all duration-300 hover:shadow-xl ${product.bgColor} flex-1`}
              >
                <CardContent className="p-0 h-full">
                  <div className="grid grid-cols-2 gap-0 h-full min-h-[180px]">
                    {/* Left side - Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Right side - Content */}
                    <div className="p-6 flex flex-col justify-center">
                      {product.discount && (
                        <span className="inline-block bg-[#E63946] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                          {product.discount}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-[#1C1C1C] mb-2 leading-tight">
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#333333] mb-3 leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-sm text-[#C9A227] font-semibold">
                          Desde
                        </span>
                        <span className="text-2xl font-bold text-[#E63946]">
                          {product.price}
                        </span>
                      </div>
                      <Button
                        onClick={() =>
                          handlePurchase(product.name, product.price)
                        }
                        size="sm"
                        className="bg-[#E63946] hover:bg-[#C9A227] text-white transition-all duration-300 w-full group-hover:scale-105"
                      >
                        Comprar Ahora
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
