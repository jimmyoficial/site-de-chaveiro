"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    position: "Proprietário",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Fiquei trancado do lado de fora de casa tarde da noite e liguei para a ChaveMestre. O técnico chegou em 20 minutos e me ajudou a entrar rapidamente sem danificar minhas fechaduras. Excelente serviço!",
    rating: 5,
  },
  {
    id: 2,
    name: "Maria Oliveira",
    position: "Empresária",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Contratamos a ChaveMestre para instalar um novo sistema de segurança em nosso prédio comercial. Eles foram profissionais, eficientes e a qualidade do trabalho foi excepcional. Recomendo fortemente!",
    rating: 5,
  },
  {
    id: 3,
    name: "Carlos Santos",
    position: "Motorista",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Perdi as chaves do meu carro durante uma caminhada. Liguei para a ChaveMestre e eles vieram até minha localização, fizeram uma nova chave na hora e me colocaram de volta na estrada. Preço justo e atendimento amigável.",
    rating: 4,
  },
  {
    id: 4,
    name: "Ana Pereira",
    position: "Síndica",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Utilizamos a ChaveMestre para todas as necessidades de fechaduras do nosso condomínio. Eles são confiáveis, rápidos e o trabalho deles é sempre de primeira linha. Nossos moradores estão sempre satisfeitos com o serviço.",
    rating: 5,
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleTestimonials(1)
      } else if (window.innerWidth < 1024) {
        setVisibleTestimonials(2)
      } else {
        setVisibleTestimonials(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + visibleTestimonials >= testimonials.length ? 0 : prevIndex + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex <= 0 ? Math.max(0, testimonials.length - visibleTestimonials) : prevIndex - 1,
    )
  }

  const displayedTestimonials = testimonials.slice(
    currentIndex,
    Math.min(currentIndex + visibleTestimonials, testimonials.length),
  )

  return (
    <div className="relative">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-xl font-bold text-blue-900">Depoimentos de Clientes</h3>
        <div className="flex space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-yellow-500 hover:text-white transition-colors"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-gray-200 hover:bg-yellow-500 hover:text-white transition-colors"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
            <div className="flex-grow">
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5" fill={i < testimonial.rating ? "currentColor" : "none"} />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
            </div>
            <div className="flex items-center mt-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                <p className="text-gray-600 text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
