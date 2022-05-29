import { Player } from "@lottiefiles/react-lottie-player"
import { Outlet } from "react-router-dom"
import { Head } from "../components/head"
import { Layout } from "../components/layout"
import { R } from "../res/R"

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
      <section className="flex flex-col md:flex-row-reverse justify-around bg-violet-100 py-10">
        <Player src={R.anim.services} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3">
          <h1 className="text-5xl font-bold mb-5">Services</h1>
          <p className="text-2xl font-bold text-gray-600">Professional Academic Services. Best Price for Value Deals.</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around">
        <Player src={'https://assets8.lottiefiles.com/packages/lf20_xcpxkfnu.json'} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3">
          <h1 className="text-4xl font-bold mb-5">Assignments/Homework</h1>
          <p className="text-2xl font-bold text-gray-600">Professional Academic Services. Best Price for Value Deals.</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src={'https://assets2.lottiefiles.com/packages/lf20_jmfqqhyb.json'} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3">
          <h1 className="text-4xl font-bold mb-5">Thesis Writing</h1>
          <p className="text-2xl font-bold text-gray-600">Professional Academic Services. Best Price for Value Deals.</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around">
        <Player src={R.anim.programming} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3">
          <h1 className="text-3xl font-bold mb-5">Programming/Computer Science</h1>
          <p className="text-2xl font-bold text-gray-600">Professional Academic Services. Best Price for Value Deals.</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src={'https://assets5.lottiefiles.com/packages/lf20_bmzarwuq.json'} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3">
          <h1 className="text-4xl font-bold mb-5">Final Year Projects</h1>
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
        <Player src={R.anim.programming} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="text-5xl font-bold mb-5">Computer Science & Programming Help</h1>
          <p className="text-2xl font-bold text-gray-600">C/C++/C#/Objective-C, Java, Python, JavaScript Assignments & Projects. Theoretical Computer Science Help Available Too.</p>
        </div>
      </section>

      <section>
        <h1 className="text-4xl text-center">What else should i fking write here???</h1>
      </section>
    </>
  )
}