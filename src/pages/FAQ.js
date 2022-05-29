import { Link } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"
import { Disclosure } from "@headlessui/react"
import { Head } from "../components/head"
import { Layout } from "../components/layout"
import { R } from "../res/R"

export const FAQ = () => {
  return (
    <Layout>
      <Head title="FAQ" />
      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src="https://assets3.lottiefiles.com/private_files/lf30_GjhcdO.json" />
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="text-5xl font-bold mb-5">Frequently Asked Questions</h1>
          <h2 className="text-2xl font-bold text-gray-600">Your Questions, Our Answers.</h2>
        </div>
      </section>

      <section className="p-10">
        <div className="">
          {
            R.faqQuestions.slice(0, 6).map(f => (
              <Disclosure as="div" className="mt-2" key={f[0]}>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>{f[0]}</span>
                  <svg className="transform rotate-180 w-6 h-6 text-blue-500">
                    <use href="#dropdown" />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <article className="p-4">{f[1]}</article>
                </Disclosure.Panel>
              </Disclosure>)
            )
          }
        </div>

        <div className="">
          {
            R.faqQuestions.slice(6).map(f => (
              <Disclosure as="div" className="mt-2" key={f[0]}>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>{f[0]}</span>
                  <svg className="transform rotate-180 w-6 h-6 text-blue-500">
                    <use href="#dropdown" />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <article className="p-4">{f[1]}</article>
                </Disclosure.Panel>
              </Disclosure>)
            )
          }
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-4xl font-bold text-center mb-3">Need to Know More?</h2>
        <p className="text-center">Head over to <Link to='/contact' className="text-blue-500">our contact page</Link> and let us know exactly what's bothering you and how we can help you. We will try to respond as soon as possible.</p>
      </section>
    </Layout>
  )
}