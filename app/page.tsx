import Image from "next/image"
import { Phone, Clock, MapPin, Mail, Facebook, Twitter, Instagram, Youtube, ChevronRight } from "lucide-react"
import ContactForm from "@/components/contact-form"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ServiceCard from "@/components/service-card"
import FeatureCard from "@/components/feature-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-blue-900">
              <span className="text-yellow-500">Chave</span>Mestre
            </a>
          </div>

          <nav className="hidden md:flex space-x-6 pl-3">
            <a
              href="#home"
              className="text-blue-900 hover:text-yellow-500 font-medium transition-colors whitespace-nowrap"
            >
              Início
            </a>
            <a
              href="#about"
              className="text-blue-900 hover:text-yellow-500 font-medium transition-colors whitespace-nowrap"
            >
              Sobre
            </a>
            <a
              href="#services"
              className="text-blue-900 hover:text-yellow-500 font-medium transition-colors whitespace-nowrap"
            >
              Serviços
            </a>
            <a
              href="#why-us"
              className="text-blue-900 hover:text-yellow-500 font-medium transition-colors whitespace-nowrap"
            >
              Por Que Nos Escolher
            </a>
            <a
              href="#testimonials"
              className="text-blue-900 hover:text-yellow-500 font-medium transition-colors whitespace-nowrap"
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="text-blue-900 hover:text-yellow-500 font-medium transition-colors whitespace-nowrap"
            >
              Contato
            </a>
          </nav>

          <div className="flex items-center">
            <a
              href="tel:+5511999999999"
              className="hidden md:flex items-center text-blue-900 font-bold whitespace-nowrap"
            >
              <div className="bg-yellow-500 p-2 rounded-full mr-2">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <span>(11) 99999-9999</span>
            </a>
            <button className="block md:hidden text-blue-900 ml-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section id="home" className="relative bg-blue-900 text-white min-h-[90vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Serviço de Chaveiro"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto px-4 py-20 z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Serviços Profissionais de Chaveiro</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Soluções rápidas, confiáveis e acessíveis para sua casa, empresa e veículos.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <a
                href="#contact"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg"
              >
                Solicitar Serviço
              </a>
              <a
                href="tel:+5511999999999"
                className="flex items-center justify-center text-white font-bold py-4 px-8 border-2 border-white rounded-full hover:bg-white hover:text-blue-900 transition-colors text-lg"
              >
                <Phone className="h-5 w-5 mr-2" />
                Ligue Agora: (11) 99999-9999
              </a>
            </div>
            <div className="mt-12 bg-white/10 backdrop-blur-sm p-6 rounded-lg inline-block">
              <div className="flex items-center justify-center">
                <div className="flex items-center mr-8">
                  <Clock className="h-6 w-6 text-yellow-500 mr-2" />
                  <div className="text-left">
                    <p className="font-bold">Atendimento 24h</p>
                    <p className="text-sm">Sempre disponível</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-yellow-500 mr-2" />
                  <div className="text-left">
                    <p className="font-bold">Resposta Rápida</p>
                    <p className="text-sm">15-30 minutos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Sobre Nosso Serviço de Chaveiro"
                  width={600}
                  height={600}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Sobre Nossa Empresa de Chaveiro</h2>
                <p className="text-gray-700 mb-6 text-lg">
                  Com mais de 15 anos de experiência, nossa equipe de chaveiros certificados oferece serviços de alta
                  qualidade para clientes residenciais, comerciais e automotivos. Temos orgulho de nosso tempo de
                  resposta rápido, trabalho profissional e preços competitivos.
                </p>
                <p className="text-gray-700 mb-8 text-lg">
                  Nossa missão é garantir a segurança e tranquilidade de nossos clientes, fornecendo soluções confiáveis
                  de chaveiro utilizando as mais recentes tecnologias e técnicas do setor.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">Licenciado & Segurado</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">Atendimento 24h</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">Técnicos Certificados</span>
                  </div>
                  <div className="flex items-center">
                    <ChevronRight className="h-5 w-5 text-yellow-500 mr-2" />
                    <span className="text-gray-700">Satisfação Garantida</span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full transition-colors"
                >
                  Fale Conosco
                  <ChevronRight className="h-5 w-5 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Nossos Serviços de Chaveiro</h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Oferecemos uma ampla gama de serviços de chaveiro para atender todas as suas necessidades de segurança.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Chaveiro Residencial"
                description="Abertura de portas, instalação de fechaduras, troca de segredo, sistemas de chave mestra e melhorias de segurança para sua casa."
                icon="home"
              />
              <ServiceCard
                title="Chaveiro Comercial"
                description="Soluções de segurança para empresas, sistemas de controle de acesso, sistemas de chave mestra e fechaduras de alta segurança."
                icon="building"
              />
              <ServiceCard
                title="Chaveiro Automotivo"
                description="Abertura de carros, corte de chaves, programação de chaves com chip, reparo de ignição e substituição de controles."
                icon="car"
              />
              <ServiceCard
                title="Emergências"
                description="Serviços de emergência 24 horas para residências, empresas e veículos quando você mais precisa."
                icon="alert-circle"
              />
              <ServiceCard
                title="Instalação & Reparo"
                description="Instalação e reparo profissional de todos os tipos de fechaduras, de padrão a sistemas de alta segurança."
                icon="tool"
              />
              <ServiceCard
                title="Cópias de Chaves"
                description="Serviços rápidos e precisos de corte e duplicação de chaves para todos os tipos de chaves."
                icon="key"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className="py-20 bg-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Por Que Escolher Nosso Serviço de Chaveiro</h2>
              <p className="max-w-3xl mx-auto text-lg text-blue-100">
                Estamos comprometidos em fornecer um serviço excepcional e garantir sua total satisfação.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                title="Tempo de Resposta Rápido"
                description="Nossos técnicos chegam em 15-30 minutos para chamadas de emergência para resolver rapidamente seus problemas de chaveiro."
                icon="clock"
              />
              <FeatureCard
                title="Licenciado & Segurado"
                description="Todos os nossos chaveiros são totalmente licenciados, segurados e com verificação de antecedentes para sua tranquilidade."
                icon="shield"
              />
              <FeatureCard
                title="Preços Competitivos"
                description="Oferecemos preços transparentes sem taxas ocultas e tarifas competitivas para todos os nossos serviços."
                icon="dollar-sign"
              />
              <FeatureCard
                title="Técnicos Experientes"
                description="Nossa equipe é composta por profissionais altamente treinados com anos de experiência no setor de chaveiros."
                icon="user"
              />
              <FeatureCard
                title="Tecnologia Avançada"
                description="Utilizamos as ferramentas e técnicas mais avançadas para fornecer soluções eficientes e eficazes de chaveiro."
                icon="cpu"
              />
              <FeatureCard
                title="100% de Satisfação"
                description="Garantimos nosso trabalho com uma garantia de satisfação em todos os serviços que prestamos."
                icon="thumbs-up"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">O Que Nossos Clientes Dizem</h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Não acredite apenas em nossa palavra. Veja o que nossos clientes satisfeitos têm a dizer sobre nossos
                serviços de chaveiro.
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Entre em Contato</h2>
              <p className="text-gray-700 max-w-3xl mx-auto text-lg">
                Precisa de um chaveiro? Estamos aqui para ajudar. Entre em contato para um serviço rápido e confiável.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <ContactForm />
              </div>

              <div className="lg:w-1/2 bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Informações de Contato</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-900 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-900">Telefone</h4>
                      <p className="text-gray-700">(11) 99999-9999</p>
                      <p className="text-gray-700">(11) 3333-3333</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-900 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-900">Email</h4>
                      <p className="text-gray-700">contato@chavemestre.com.br</p>
                      <p className="text-gray-700">suporte@chavemestre.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-900 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-900">Endereço</h4>
                      <p className="text-gray-700">Rua das Chaves, 123</p>
                      <p className="text-gray-700">São Paulo, SP - CEP 01234-567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-900 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-blue-900">Horário de Funcionamento</h4>
                      <p className="text-gray-700">Segunda - Sexta: 8:00 - 20:00</p>
                      <p className="text-gray-700">Sábado: 9:00 - 17:00</p>
                      <p className="text-gray-700">Atendimento de Emergência: 24h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-lg text-blue-900 mb-4">Siga-nos</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-blue-900 p-3 rounded-full text-white hover:bg-yellow-500 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-900 p-3 rounded-full text-white hover:bg-yellow-500 transition-colors"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-900 p-3 rounded-full text-white hover:bg-yellow-500 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="bg-blue-900 p-3 rounded-full text-white hover:bg-yellow-500 transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="text-yellow-500">Chave</span>Mestre
              </h3>
              <p className="mb-4 text-blue-100">
                Serviços profissionais de chaveiro para residências, empresas e veículos. Disponível 24 horas por dia
                para todas as suas soluções de segurança.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Nossos Serviços</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Chaveiro Residencial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Chaveiro Comercial
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Chaveiro Automotivo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Emergências
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Instalação & Reparo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Cópias de Chaves
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Início
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Sobre Nós
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#why-us" className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center">
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Por Que Nos Escolher
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Depoimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-blue-100 hover:text-yellow-500 transition-colors flex items-center"
                  >
                    <ChevronRight className="h-4 w-4 mr-2" />
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-yellow-500 mr-2 mt-1" />
                  <span className="text-blue-100">
                    Rua das Chaves, 123
                    <br />
                    São Paulo, SP - CEP 01234-567
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-blue-100">(11) 99999-9999</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-blue-100">contato@chavemestre.com.br</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="text-blue-100">Atendimento 24h para Emergências</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-100">
            <p>&copy; {new Date().getFullYear()} ChaveMestre Serviços de Chaveiro. Todos os Direitos Reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
