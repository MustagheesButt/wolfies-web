import { R } from "@/res/R"
import { useEffect } from "react"
import { Link } from "react-router-dom"

const HeroVideo = ({ title, subtitle }) => {

  useEffect(() => {
    function setBgVid() {
      const vidSrc = document.querySelector('video source') as HTMLSourceElement
      const full = `${R.constants.UPLOADS_DIR}/2022/05/Full-Ad.webm`
      const mobile = `${R.constants.UPLOADS_DIR}/2022/05/Full-Ad-Mobile.webm`

      if (window.screen.availWidth <= 480) {
        if (vidSrc.src !== mobile) vidSrc.src = mobile
      } else {
        if (vidSrc.src !== full) vidSrc.src = full
      }
      document.querySelector('video').load()
    }

    window.onresize = () => {
      if (window.lastWidth !== window.innerWidth) // only trigger when device width changes
        setBgVid()
    }
    window.lastWidth = window.innerWidth
    setBgVid()
  }, [])

  return (
    <div className="relative">
      <video autoPlay muted loop style={{ height: "100%" }} className="mx-auto" poster={`/static/images/poster.webp`}>
        <source src='' type="video/webm" />
      </video>

      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800/50 text-white/90 flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
        <p className="text-2xl md:text-3xl my-5 font-serif italic mx-10">{subtitle}</p>
        <div className="mt-5">
          <a href="#quote-form" className="border-2 p-3 rounded hover:bg-white hover:text-black mr-5 transition duration-500">I'm Feeling Lucky</a>
          <Link to="/services" className="bg-blue-400/30 border-2 border-blue-200 p-3 rounded hover:bg-blue-500 transition duration-500">Learn More</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroVideo