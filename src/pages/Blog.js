import { Layout } from "../components/layout"

export const Blog = () => {
  return (
    <Layout>
      <section className="flex flex-col justify-center h-[80vh] text-white bg-cover bg-fixed" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${process.env.PUBLIC_URL}/static/images/pexels-steve-397863.jpg)` }}>
        <h1 className="text-4xl font-bold text-center">Blog</h1>
        <h2 className="text-5xl text-center">Coming Soon</h2>
      </section>
    </Layout>
  )
}