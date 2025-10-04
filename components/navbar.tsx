"use client";

import { useState } from "react";
import Image from "next/image";
import { Search } from "lucide-react";

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const menuItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "#productos" },
    { name: "Sobre Nosotros", href: "#sobre-nosotros" },
    { name: "Testimonios", href: "#testimonios" },

    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo */}
          <div className="flex items-center ">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mama%20%281%29-DsCb1jBqtTKncCaUVjLSGZUAaeMMXe.png"
              alt="Mama Quilla"
              width={120}
              height={60}
              className="h-18 w-auto"
            />
          </div>

          {/* Center: Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#1C1C1C] hover:text-[#E63946] transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right: Search Icon */}
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-[#C9A227] hover:text-[#E63946] transition-colors duration-300"
            aria-label="Buscar productos"
          >
            <Search className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden pb-4 flex flex-wrap gap-4 justify-center">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm text-[#1C1C1C] hover:text-[#E63946] transition-colors duration-300 font-medium"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="pb-4 animate-slide-up">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="w-full px-4 py-2 border-2 border-[#E5E5E5] rounded-lg focus:border-[#E63946] focus:outline-none transition-colors duration-300"
              autoFocus
            />
          </div>
        )}
      </div>
    </nav>
  );
}
