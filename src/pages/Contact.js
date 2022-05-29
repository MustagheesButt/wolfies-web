import { Player } from "@lottiefiles/react-lottie-player"
import { useEffect } from "react"
import { Layout } from "../components/layout"

export const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us"
  })

  return (
    <Layout>
      <section className="flex flex-col md:flex-row-reverse justify-around py-14 bg-blue-100">
        <Player src="https://assets10.lottiefiles.com/packages/lf20_isbiybfh.json" style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="text-4xl font-bold mb-5">Contact Us Now</h1>
          <p className="text-2xl font-bold text-gray-600">Send us Any Questions or Queries You Want to Ask. We Are Here to Help You 24/7. Anywhere, Anytime.</p>
        </div>
      </section>

      <section className="flex justify-around my-10">
        <div>
          <h2 className="text-3xl font-bold mb-5">Contact/WhatsApp</h2>
          <ul>
            <li>92 310 4515 123</li>
            <li>92 303 4401 077</li>
          </ul>
        </div>
        <div>
          <h2>Contact form here</h2>
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-bold">info@wolfiesolutions.com</h2>
        <div>
          <a href="https://facebook.com" target='_blank' rel="noreferrer">
            <svg className="w-3 h-3">
              <use id="facebook" />
            </svg>
          </a>

          <a href="https://facebook.com" target='_blank' rel="noreferrer">
            <svg className="w-3 h-3">
              <use id="facebook" />
            </svg>
          </a>

          <a href="https://instagram.com" target='_blank' rel="noreferrer">
            <svg className="w-3 h-3">
              <use id="instagram" />
            </svg>
          </a>
        </div>
      </section>
    </Layout>
  )
}