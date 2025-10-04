"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart } from "lucide-react"

const categories = [
  {
    name: "Condimentos y Ajíes",
    products: [
      { name: "Inca Food - Aji Amarillo", image: "/aji-amarillo-inca-food.jpg", price: "$3.49" },
      { name: "Aji Panca", image: "/aji-panca-paste.jpg", price: "$3.49" },
      { name: "Rocoto", image: "/rocoto-paste-jar.jpg", price: "$3.99" },
      { name: "Sibarita Ají Amarillo", image: "/sibarita-aji-amarillo.jpg", price: "$3.29" },
    ],
  },
  {
    name: "Salsas y Conservas",
    products: [
      { name: "Aceitunas", image: "/peruvian-olives-jar.jpg", price: "$4.99" },
      { name: "Papa Amarilla", image: "/papa-amarilla-can.jpg", price: "$2.99" },
      { name: "Maíz Chulpe", image: "/placeholder.svg?height=250&width=250", price: "$2.49" },
    ],
  },
  {
    name: "Bebidas y Licores",
    products: [
      { name: "Inca Kola 2lts", image: "/placeholder.svg?height=250&width=250", price: "$4.99" },
      { name: "Inca Kola Lata", image: "/placeholder.svg?height=250&width=250", price: "$1.99" },
      { name: "Kola Inglesa", image: "/placeholder.svg?height=250&width=250", price: "$3.99" },
      { name: "Chicha Morada", image: "/chicha-morada-bottle.jpg", price: "$5.99" },
      { name: "Bebida de Maracuyá", image: "/placeholder.svg?height=250&width=250", price: "$4.49" },
    ],
  },
  {
    name: "Snacks y Dulces",
    products: [
      { name: "Panetón Gloria", image: "/placeholder.svg?height=250&width=250", price: "$12.99" },
      { name: "Turrones San José", image: "/placeholder.svg?height=250&width=250", price: "$7.99" },
      { name: "Turrón Doña Pepa", image: "/placeholder.svg?height=250&width=250", price: "$8.99" },
      { name: "Alfajores", image: "/placeholder.svg?height=250&width=250", price: "$6.99" },
      { name: "Lam's Tiras de Yuca", image: "/placeholder.svg?height=250&width=250", price: "$3.99" },
      { name: "Lam's Tiras de Plátano", image: "/placeholder.svg?height=250&width=250", price: "$3.99" },
    ],
  },
]

export default function ProductCatalog() {
  const [activeCategory, setActiveCategory] = useState(0)

  const handlePurchase = (productName: string, price: string) => {
    const message = `Hola, me interesa comprar: ${productName} - ${price}`
    window.open(`https://wa.me/15122033079?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-4">Catálogo de Productos</h2>
          <p className="text-lg text-[#1C1C1C] max-w-2xl mx-auto">
            Explora nuestra selección completa de productos peruanos organizados por categoría
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
                  <h3 className="font-semibold text-base mb-3 text-[#1C1C1C] min-h-[3rem]">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#E63946]">{product.price}</span>
                    <Button
                      onClick={() => handlePurchase(product.name, product.price)}
                      size="sm"
                      className="bg-[#E63946] hover:bg-[#C9A227] text-white transition-colors duration-300"
                    >
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
  )
}
