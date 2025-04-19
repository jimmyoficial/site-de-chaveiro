import {
  Home,
  Building,
  Car,
  AlertCircle,
  PenToolIcon as Tool,
  Key,
  Lock,
  Shield,
  Smartphone,
  Clock,
  Wrench,
} from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-10 w-10 text-yellow-500" }

    switch (iconName.toLowerCase()) {
      case "home":
        return <Home {...iconProps} />
      case "building":
        return <Building {...iconProps} />
      case "car":
        return <Car {...iconProps} />
      case "alert-circle":
        return <AlertCircle {...iconProps} />
      case "tool":
        return <Tool {...iconProps} />
      case "key":
        return <Key {...iconProps} />
      case "lock":
        return <Lock {...iconProps} />
      case "shield":
        return <Shield {...iconProps} />
      case "smartphone":
        return <Smartphone {...iconProps} />
      case "clock":
        return <Clock {...iconProps} />
      case "wrench":
        return <Wrench {...iconProps} />
      default:
        return <Lock {...iconProps} />
    }
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="bg-blue-50 p-4 rounded-full inline-block mb-6">{getIcon(icon)}</div>
      <h3 className="text-xl font-bold text-blue-900 mb-4">{title}</h3>
      <p className="text-gray-700 flex-grow">{description}</p>
      <a
        href="#contact"
        className="mt-6 inline-flex items-center text-blue-900 font-semibold hover:text-yellow-500 transition-colors"
      >
        Saiba Mais
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  )
}
