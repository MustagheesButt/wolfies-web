import { Player } from "@lottiefiles/react-lottie-player"
import { Head } from "../components/layout/head"
import { Layout } from "../components/layout"

export const Contact = () => {
  return (
    <Layout>
      <Head title="Contact Us" />
      <section className="flex flex-col md:flex-row-reverse justify-around py-14 bg-blue-100">
        <Player src="https://assets10.lottiefiles.com/packages/lf20_isbiybfh.json" style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="text-4xl font-bold mb-5">Contact Us Now</h1>
          <p className="text-2xl font-bold text-gray-600">Send us Any Questions or Queries You Have. We Are Here to Help You 24/7.</p>
        </div>
      </section>

      <section className="flex justify-around my-10">
        <div>
          <h2 className="text-3xl font-bold mb-5">Contact/WhatsApp</h2>
          <ul>
            <li>92 310 4515 123</li>
            <li>92 303 4401 077</li>
          </ul>
          <p className="italic">anywhere, anytime {'<'}3</p>
        </div>
        <div>
          <h2>Contact form here</h2>
        </div>
      </section>

      <section className="text-center mb-10">
        <h2 className="text-md font-bold text-center text-gray-500 mb-3">EMAIL</h2>
        <h3 className="text-2xl font-bold mb-10">info@wolfiesolutions.com</h3>

        <h2 className="text-md font-bold text-center text-gray-500 mb-3">SOCIAL</h2>
        <div className="flex justify-center">
          <a href="https://facebook.com" target='_blank' rel="noreferrer" className="text-blue-500 mr-5">
            <svg className="w-8 h-8">
              <use href="#facebook" />
            </svg>
          </a>

          <a href="https://instagram.com" target='_blank' rel="noreferrer" className="text-pink-500">
            <svg className="w-8 h-8">
              <use href="#instagram" />
            </svg>
          </a>
        </div>
      </section>
    </Layout>
  )
}