import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import Image from "next/image";
import mamaf from "@/public/mamaf.png";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Logo */}
          <div>
            <Image src={mamaf} alt="Mama Quilla" className="h-18 w-auto mb-4" />
            <p className="text-white/80 leading-relaxed">
              Tu tienda de confianza para productos peruanos en Estados Unidos.
            </p>
          </div>

          {/* Center: Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Enlaces</h4>
            <div className="space-y-3">
              <a
                href="#"
                className="block text-[#C9A227] hover:text-[#E63946] transition-colors duration-300"
              >
                Envíos y devoluciones
              </a>
              <a
                href="#"
                className="block text-[#C9A227] hover:text-[#E63946] transition-colors duration-300"
              >
                Aviso legal
              </a>
              <a
                href="#"
                className="block text-[#C9A227] hover:text-[#E63946] transition-colors duration-300"
              >
                Políticas de privacidad
              </a>
            </div>
          </div>

          {/* Right: Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Contacto</h4>
            <div className="space-y-3 mb-4">
              <a
                href="tel:+15122033079"
                className="flex items-center gap-2 text-white hover:text-[#C9A227] transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+1 512-203-3079</span>
              </a>
              <a
                href="mailto:mamaquillatx@gmail.com"
                className="flex items-center gap-2 text-white hover:text-[#C9A227] transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>mamaquillatx@gmail.com</span>
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mamaquillatx/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A227] hover:text-[#E63946] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/mamaquillaustin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A227] hover:text-[#E63946] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © 2025 Mama Quilla - Peruvian Products. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
