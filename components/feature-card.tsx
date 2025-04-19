import { Clock, Shield, DollarSign, User, Cpu, ThumbsUp, Award, Headphones, Truck, Settings } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-10 w-10 text-yellow-500" }

    switch (iconName.toLowerCase()) {
      case "clock":
        return <Clock {...iconProps} />
      case "shield":
        return <Shield {...iconProps} />
      case "dollar-sign":
        return <DollarSign {...iconProps} />
      case "user":
        return <User {...iconProps} />
      case "cpu":
        return <Cpu {...iconProps} />
      case "thumbs-up":
        return <ThumbsUp {...iconProps} />
      case "award":
        return <Award {...iconProps} />
      case "headphones":
        return <Headphones {...iconProps} />
      case "truck":
        return <Truck {...iconProps} />
      case "settings":
        return <Settings {...iconProps} />
      default:
        return <Award {...iconProps} />
    }
  }

  return (
    <div className="bg-blue-800 p-8 rounded-lg hover:bg-blue-700 transition-colors h-full">
      <div className="bg-blue-900 p-4 rounded-full inline-block mb-6">{getIcon(icon)}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  )
}
