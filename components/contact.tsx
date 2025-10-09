"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contacto" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold px-8 py-4 border-4 border-accent rounded-full">
              Contacto
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            ¿Tenés un proyecto en mente? ¿Querés ser parte de nuestros programas? Conectemos y trabajemos juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Información de contacto</h3>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Dirección</div>
                  <p className="text-muted-foreground">
                   Ruta 36 Nº 1354, entre calles 13 y 14<br />
                    Cruce de Florencio Varela, Berazategui, Buenos Aires, Argentina
                    <br />
                    Argentina
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Teléfono</div>
                  <a
                    href="tel:+541143044266"
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    (011) 4304-4266
                  </a>
                  <a
                    href="tel:+541152634256"
                    className="text-muted-foreground hover:text-primary transition-colors block"
                  >
                    (011) 5263-4256
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a
                    href="mailto:info@probuenosaires.org"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@probuenosaires.org
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Horario de atención</div>
                  <p className="text-muted-foreground">
                    Lunes a Viernes: 9:00 - 18:00 hs
                    <br />
                    Sábados y Domingos: Cerrado
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary border border-border rounded-lg p-6">
              <h4 className="font-bold mb-3">Datos institucionales</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>CUIT:</strong> 30-70807514-7
                </p>
                <p>
                  <strong>Personería Jurídica:</strong> Otorgada por IGJ
                </p>
                <p>
                  <strong>Organización:</strong> Sin fines de lucro
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 lg:p-12">
            <h3 className="text-2xl font-bold mb-6">Envianos tu consulta</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre completo *
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Teléfono
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+54 11 1234-5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Asunto *
                </label>
                <Input
                  id="subject"
                  type="text"
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="h-12"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje *
                </label>
                <Textarea
                  id="message"
                  placeholder="Contanos sobre tu consulta o proyecto..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                />
              </div>

              <Button type="submit" size="lg" className="w-full h-12 bg-primary hover:bg-primary/90">
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
