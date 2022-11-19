import { Head } from "../components/layout/head"
import { Layout } from "../components/layout"

export const Congratulations = () => {
  return (
    <Layout>
      <Head title="Congratulations!" />

      <section className="h-[80vh] flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold mb-10">Congo!</h1>
        <p className="w-2/3 text-center">Your order has been placed. You will recieve an email shortly, with order confirmation details and the final
          price we have to offer based on the details and requirements you have provided.</p>
      </section>
    </Layout>
  )
}