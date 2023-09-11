import { FC, ReactNode } from "react"
import './HeroGrainy.css'

type HeroGrainyProps = {
  title: string
  subtitle: string
  actions?: ReactNode
}

{/* https://codepen.io/Juxtopposed/pen/BaqLEQY */ }
const HeroGrainy: FC<HeroGrainyProps> = ({ title, subtitle, actions }) => {
  return (
    <div className="hero-container md:px-20 flex h-screen relative overflow-hidden">
      <svg className="hidden">
        <filter id="noiseFilter">
          <feTurbulence type="turbulence" baseFrequency={0.65} />
        </filter>
      </svg>
      <div className="hero flex flex-col md:flex-row justify-between items-center">
        <div className="hero-text">
          <h1>{title}</h1>
          <p>{subtitle}</p>

          <div className="flex flex-col md:flex-row gap-6">
            {actions}
          </div>

        </div>
        <div className="blob-cont mt-[-150vh] md:mt-0">
          <div className="yellow blob"></div>
          <div className="red blob"></div>
          <div className="green blob"></div>
        </div>
      </div>
    </div>
  )
}

export default HeroGrainy