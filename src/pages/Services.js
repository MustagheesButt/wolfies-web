import { Player } from "@lottiefiles/react-lottie-player"
import { Outlet } from "react-router-dom"
import { Head } from "../components/head"
import { Layout } from "../components/layout"

export const Services = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

export const ServicesHome = () => {
  return (
    <>
      <Head title="Services" />
      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src="https://assets8.lottiefiles.com/packages/lf20_y3qfynfr.json" style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="text-5xl font-bold mb-5">Services</h1>
          <p className="text-2xl font-bold text-gray-600">Professional Academic Services. Best Price for Value Deals.</p>
        </div>
      </section>
    </>
  )
}

export const Assignments = () => {
  return (
    <>
      <Head title="Assignments" />
      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src="https://assets8.lottiefiles.com/packages/lf20_xcpxkfnu.json" style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="text-5xl font-bold mb-5">Assignments</h1>
        </div>
      </section>
    </>
  )
}

export const ComputerScience = () => {
  return (
    <>
      <Head title="Computer Science & Programming Help" />
      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src="https://assets1.lottiefiles.com/packages/lf20_ljx86sv6.json" style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="text-5xl font-bold mb-5">Computer Science & Programming Help</h1>
          <p className="text-2xl font-bold text-gray-600">C/C++/C#/Objective-C, Java, Python, JavaScript Assignments & Projects. Theoretical Computer Science Help Available Too.</p>
        </div>
      </section>
    </>
  )
}