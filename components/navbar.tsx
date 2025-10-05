"use client";
import Image from "next/image";
import mamaf from "@/public/mamaf.png";

export default function Navbar() {
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
        <div className="flex items-center justify-between h-24">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mama%20%281%29-DsCb1jBqtTKncCaUVjLSGZUAaeMMXe.png"
              alt="Mama Quilla"
              width={100}
              height={60}
              className="h-28 w-auto"
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

          {/* Right: Image (same size as logo) */}
          <div className="flex items-center">
            <Image
              src={mamaf}
              alt="Mamaf"
              width={100}
              height={60}
              className="h-28 w-auto "
            />
          </div>
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
      </div>
    </nav>
  );
}
