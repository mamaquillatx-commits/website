"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create WhatsApp message
    const whatsappMessage = `*Nuevo Contacto desde Mama Quilla*%0A%0A*Nombre:* ${formData.name}%0A*Email:* ${formData.email}%0A*Teléfono:* ${formData.phone}%0A*Mensaje:* ${formData.message}`

    // Open WhatsApp with the message
    window.open(`https://wa.me/1234567890?text=${whatsappMessage}`, "_blank")

    // Reset form
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-[#E63946]">Contáctanos</h2>
          <p className="text-lg text-[#333333] max-w-2xl mx-auto">
            ¿Tienes alguna pregunta o necesitas ayuda? Estamos aquí para ti. Completa el formulario y nos pondremos en
            contacto contigo lo antes posible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-6">Información de Contacto</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F9F9F9] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-1">Teléfono</h4>
                    <p className="text-[#333333]">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F9F9F9] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-1">Email</h4>
                    <p className="text-[#333333]">contacto@mamaquilla.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#F9F9F9] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#C9A227]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1C1C1C] mb-1">Horario de Atención</h4>
                    <p className="text-[#333333]">Lunes a Viernes: 9:00 AM - 6:00 PM EST</p>
                    <p className="text-[#333333]">Sábados: 10:00 AM - 4:00 PM EST</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#F9F9F9] p-6 rounded-lg">
              <h4 className="font-semibold text-[#1C1C1C] mb-3">¿Por qué elegirnos?</h4>
              <ul className="space-y-2 text-[#333333]">
                <li className="flex items-start gap-2">
                  <span className="text-[#E63946] mt-1">✓</span>
                  <span>Respuesta rápida en menos de 24 horas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E63946] mt-1">✓</span>
                  <span>Atención personalizada en español</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#E63946] mt-1">✓</span>
                  <span>Asesoría sobre productos peruanos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#F9F9F9] p-8 rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                  Nombre Completo *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full bg-white border-[#E5E5E5] focus:border-[#E63946] focus:ring-[#E63946]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                  Correo Electrónico *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full bg-white border-[#E5E5E5] focus:border-[#E63946] focus:ring-[#E63946]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                  Teléfono *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                  className="w-full bg-white border-[#E5E5E5] focus:border-[#E63946] focus:ring-[#E63946]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#1C1C1C] mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                  rows={5}
                  className="w-full bg-white border-[#E5E5E5] focus:border-[#E63946] focus:ring-[#E63946] resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#E63946] hover:bg-[#C9A227] text-white hover:text-[#1C1C1C] font-semibold py-6 transition-all duration-300"
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>

              <p className="text-sm text-[#333333] text-center">
                Al enviar este formulario, aceptas nuestra política de privacidad
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
