import { Layout } from "../components/layout"

export const Home = () => {
  const AB = [
    [ "Coming Soon", "Save your precious time. Let us handle your assignments & projects." ],
    [ "Don't Let Studies Stress You", "Enjoy your life while we take care of the stress." ]
  ]
  const ab = AB[parseInt(Math.random() * 10) % 2]

  return (
    <Layout fixedNav={true}>
      <section className="relative bg-black mt-7 md:mt-0">
        <video autoPlay muted loop style={{height: "100%"}} className="mx-auto">
          <source src={`${process.env.PUBLIC_URL}/home-bg-5182689.mp4`} type="video/mp4" />
        </video>

        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800/50 text-white/75 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">{ab[0]}</h1>
          <p className="text-2xl md:text-3xl mt-5 font-serif italic mx-10">{ab[1]}</p>
        </div>
      </section>
    </Layout>
  )
}