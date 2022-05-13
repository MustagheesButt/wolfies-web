import { Player } from "@lottiefiles/react-lottie-player"
import { Head } from "../components/head"
import { Layout } from "../components/layout"

export const FAQ = () => {
  return (
    <Layout>
      <Head title="FAQ" />
      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src="https://assets3.lottiefiles.com/private_files/lf30_GjhcdO.json" />
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="text-5xl font-bold mb-5">Frequently Asked Questions</h1>
          <p className="text-2xl font-bold text-gray-600">Your Questions, Our Answers.</p>
        </div>
      </section>
    </Layout>
  )
}