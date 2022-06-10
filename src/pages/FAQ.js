import { Link } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"
import { Head } from "../components/head"
import { Layout } from "../components/layout"
import { R } from "../res/R"
import { FAQSection } from "../components/faq_section"

export const FAQ = () => {
  return (
    <Layout>
      <Head title="FAQ" />
      <section className="flex flex-col md:flex-row-reverse justify-around py-10">
        <Player src="https://assets3.lottiefiles.com/private_files/lf30_GjhcdO.json" />
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="text-5xl font-bold mb-5">Frequently Asked Questions</h1>
          <h2 className="text-2xl font-bold text-gray-600">Your Questions, Our Answers.</h2>
        </div>
      </section>

      <section className="p-10">
        <FAQSection questionNAnswers={R.faqQuestions} />
      </section>

      <section className="my-10">
        <h2 className="text-4xl font-bold text-center mb-3">Need to Know More?</h2>
        <p className="text-center">Head over to <Link to='/contact' className="text-blue-500">our contact page</Link> and let us know exactly what's bothering you and how we can help you. We will try to respond as soon as possible.</p>
      </section>
    </Layout>
  )
}