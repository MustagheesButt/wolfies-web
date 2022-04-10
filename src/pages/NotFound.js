import { Layout } from "../components/layout"

export const NotFound = () => {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center h-[80vh]">
        <h2 className="text-3xl font-bold text-gray-700">404</h2>
        <h1 className="text-4xl font-bold mt-2">Not Found</h1>
        <p className="mt-5">The page you were looking for could not be found.</p>
      </section>
    </Layout>
  )
}