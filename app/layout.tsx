import type React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Mama Quilla - Productos Peruanos en USA | Inca Kola, Ají Amarillo y Más",
  description:
    "Mama Quilla - Tienda online de productos peruanos en USA. Inca Kola, ají amarillo, panetón, dulces y más. Envíos rápidos a todo Estados Unidos.",
  keywords:
    "comprar productos peruanos en USA, tienda online de productos peruanos en Estados Unidos, Inca Kola USA, ají amarillo online, snacks peruanos en USA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
