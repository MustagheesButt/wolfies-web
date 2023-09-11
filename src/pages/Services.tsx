import { Link } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"
import { Outlet } from "react-router-dom"
import { Head } from "@/components/layout/head"
import { Layout } from "@/components/layout"
import { R } from "@/res/R"

import { Assignments } from "./services/Assignments"
import { Dissertations } from "./services/Dissertations"
import { EssayWriting } from "./services/EssayWriting"
import { FinalYearProjects } from "./services/FinalYearProjects"
import { ThesisWriting } from "./services/ThesisWriting"
import { ComputerScience } from "./services/ComputerScience"

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
      <section className="flex flex-col md:flex-row-reverse justify-around py-10 relative">
        <Player src={R.anim.services} style={{ maxWidth: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3">
          <h1 className="text-5xl font-bold mb-5">Services</h1>
          <p className="text-2xl font-bold text-gray-600">Professional Academic Services. Best Price for Value Deals.</p>
        </div>

        <img src={R.accents.cross_blue} className="absolute animate-spin-slow bottom-10" alt="" />
        <img src={R.accents.cross_black} className="absolute animate-spin-slow left-20 top-28" alt="" />
      </section>

      <section className="flex flex-col md:flex-row justify-around">
        <Player src={R.anim.assignments} style={{ maxWidth: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3 py-10">
          <h2 className="text-4xl font-bold mb-5">Assignments/Homework</h2>
          <p className="text-md text-gray-600">The college gave you some nasty assignments and homework? That's unacceptable! Let us take care of it while you focus on what's more important to you.</p>
          <Link to='/services/assignments' className="font-bold mt-5">Learn More</Link>
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src={R.anim.thesis} style={{ maxWidth: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3 py-10">
          <h2 className="text-4xl font-bold mb-5">Thesis Writing</h2>
          <p className="text-md text-gray-600">This is exactly what you need to score perfect in your thesis and earn that degree. We also provide consultation if you are not sure about your thesis topic.</p>
          <Link to='/services/thesis-writing' className="font-bold mt-5">Learn More</Link>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around">
        <Player src={R.anim.programming} style={{ maxWidth: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3 py-10">
          <h2 className="text-3xl font-bold mb-5">Programming/Computer Science</h2>
          <p className="text-md text-gray-600">Coding can be really difficult and mentally stressful for normal people. Let us help you out in this difficult time. After all, that's what friends are for!</p>
          <Link to='/services/computer-science-programming' className="font-bold mt-5">Learn More</Link>
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src={R.anim.fyp} style={{ maxWidth: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3 py-10">
          <h2 className="text-4xl font-bold mb-5">Final Year Projects</h2>
          <p className="text-md text-gray-600">Having trouble coming up with an impressive idea for your FYP? We provide free consultation for FYP ideas. And we also help take your project to completion.</p>
          <Link to='/services/assignments' className="font-bold mt-5">Learn More</Link>
        </div>
      </section>
    </>
  )
}

export {
  Assignments,
  ComputerScience,
  Dissertations,
  EssayWriting,
  FinalYearProjects,
  ThesisWriting
}