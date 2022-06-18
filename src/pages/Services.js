import { Link } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { Head } from "../components/head"
import { Layout } from "../components/layout"
import { R } from "../res/R"
import { fetchReviews, Reviews } from "../components/reviews"
import { fetchPosts, Posts } from "../components/posts"
import { fetchSamples, Samples } from "../components/samples"
import { FAQSection } from "../components/faqSection"

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
      <section className="flex flex-col md:flex-row-reverse justify-around  py-10 relative">
        <Player src={R.anim.services} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3">
          <h1 className="text-5xl font-bold mb-5">Services</h1>
          <p className="text-2xl font-bold text-gray-600">Professional Academic Services. Best Price for Value Deals.</p>
        </div>

        <img src={R.accents.cross_blue} className="absolute animate-spin-slow bottom-10" alt="" />
        <img src={R.accents.cross_black} className="absolute animate-spin-slow left-20 top-28" alt="" />
      </section>

      <section className="flex flex-col md:flex-row justify-around">
        <Player src={R.anim.assignments} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3 py-10">
          <h2 className="text-4xl font-bold mb-5">Assignments/Homework</h2>
          <p className="text-md text-gray-600">The college gave you some nasty assignments and homework? That's unacceptable! Let us take care of it while you focus on what's more important to you.</p>
          <Link to='/services/assignments' className="font-bold mt-5">Learn More</Link>
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src={R.anim.thesis} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3 py-10">
          <h2 className="text-4xl font-bold mb-5">Thesis Writing</h2>
          <p className="text-md text-gray-600">This is exactly what you need to score perfect in your thesis and earn that degree. We also provide consultation if you are not sure about your thesis topic.</p>
          <Link to='/services/thesis-writing' className="font-bold mt-5">Learn More</Link>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around">
        <Player src={R.anim.programming} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3 py-10">
          <h2 className="text-3xl font-bold mb-5">Programming/Computer Science</h2>
          <p className="text-md text-gray-600">Coding can be really difficult and mentally stressful for normal people. Let us help you out in this difficult time. After all, that's what friends are for!</p>
          <Link to='/services/computer-science-programming' className="font-bold mt-5">Learn More</Link>
        </div>
      </section>

      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src={R.anim.fyp} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center md:w-1/3 py-10">
          <h2 className="text-4xl font-bold mb-5">Final Year Projects</h2>
          <p className="text-md text-gray-600">Having trouble coming up with an impressive idea for your FYP? We provide free consultation for FYP ideas. And we also help take your project to completion.</p>
          <Link to='/services/assignments' className="font-bold mt-5">Learn More</Link>
        </div>
      </section>
    </>
  )
}

export const Assignments = () => {
  const [reviews, setReviews] = useState([])
  const [posts, setPosts] = useState([])
  const [samples, setSamples] = useState([])

  useEffect(() => {
    fetchReviews(setReviews, [5])
    fetchPosts(setPosts, 5)
    fetchSamples(setSamples, 5)
  }, [])

  const services = [
    { title: "Law Assignments", desc: "", icon: "#shield-exclamation" },
    { title: "MBA", desc: "", icon: "#briefcase" },
    { title: "Psychology", desc: "", icon: "#users" },
    { title: "Medical Assignments", desc: "", icon: "#database" },
    { title: "Nursing Dissertation", desc: "", icon: "#share" },
    { title: "Essay Writing", desc: "", icon: "#lock-open" },
    { title: "IT", desc: "", icon: "#globe" },
    { title: "Architecture", desc: "", icon: "#mobile-s" },
    { title: "Arts & Literature", desc: "", icon: "#desktop-computer" },
  ]

  return (
    <>
      <Head title="Assignments" />
      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src={R.anim.assignments} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="text-5xl font-bold mb-5">Assignments</h1>
          <p className="text-2xl font-bold text-gray-600">Top rated assignment help service. Amazing results, reasonable prices.</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold text-center mb-5">Why Do People Need Online Assignment Help?</h2>
        <div className="text-center w-1/3 m-auto">
          <p className="mb-5">A lot of people go to other countries to get jobs in order to support their families,
            but very often they don't get visas. So they apply on study visa, then start working jobs. Now these hard working people
            don't have the time to work on bullshit assignments, projects and presentations. That's when assignment help services come in play</p>
          <Link to='/blog/why-do-people-need-online-assignment-help' className="font-bold">Read More</Link>
        </div>
      </section>

      <section className="bg-gray-100 pt-20 pb-10">
        <h2 className="text-3xl font-bold text-center mb-5">Wide Subject Coverage</h2>
        <p className="text-center w-2/3 m-auto">Whether you are studying medical, law, engineering, arts & literature, history & culture,
          business & leadership, nursing or psychology, our team of 1000+ field specialists and industry leading experts are ready to help you
          at every stage of your educational life. So what are you waiting for?</p>

        <div className="flex flex-wrap p-10 justify-center">
          {
            services.map(s => (
              <div className="flex flex-col w-1/4 rounded-lg bg-white shadow-lg items-center mr-5 mb-5 p-5" key={s.title}>
                <svg className="h-6 w-6 mb-2"><use href={s.icon} /></svg>
                <div className="flex flex-col justify-start text-center">
                  <h2 className="text-gray-900 text-xl font-medium mb-2">{s.title}</h2>
                  <p className="text-gray-700 text-base mb-4">{s.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      {
        samples.length > 0
          ?
          <section className="my-10">
            <h2 className="text-3xl font-bold text-center mb-3">Sample Work</h2>
            <p className="text-gray-600 text-center mb-5">Some sample work we have previously done for our clients.</p>
            <Samples samples={samples} />
          </section>
          : ''
      }

      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-3">FAQ</h2>
        <p className="text-gray-600 text-center mb-5">Our answers to your most frequently asked questions.</p>
        <FAQSection questionNAnswers={R.faqQuestions} />
      </section>

      {
        reviews.length > 0
          ?
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-center mb-3">Customer Reviews</h2>
            <p className="text-gray-600 text-center">Good things go together. Like us and our customers!</p>
            <Reviews reviews={reviews} />
          </section>
          : ''
      }

      {
        posts.length > 0
          ?
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-center mb-3">Read More</h2>
            <p className="text-gray-600 text-center">Latest updates and news from our side.</p>

            <Posts posts={posts} />
          </section>
          : ''
      }
    </>
  )
}

export const EssayWriting = () => {
  return (
    <h1>Essays - Coming Soon</h1>
  )
}

export const Dissertations = () => {
  return (
    <h1>Dissertations - Coming Soon</h1>
  )
}

export const ThesisWriting = () => {
  return (
    <h1>Thesis - Coming Soon</h1>
  )
}

export const FinalYearProjects = () => {
  return (
    <h1>Final Year Projects - Coming Soon</h1>
  )
}

export const ComputerScience = () => {
  const [reviews, setReviews] = useState([])
  const [posts, setPosts] = useState([])
  const [samples, setSamples] = useState([])

  useEffect(() => {
    fetchReviews(setReviews, [4])
    fetchPosts(setPosts, [4])
    fetchSamples(setSamples, [4])
  }, [])

  const csServices = [
    { title: "Data Structures & Algorithms", desc: "Let us help you with the most scariest thing in all of Computer Science and Programming, DSA", icon: "#chart-bar-s" },
    { title: "Cloud Computing", desc: "Our AWS and Google certified experts are here to help in your cloud assignments", icon: "#cloud-s" },
    { title: "Web Projects", desc: "Considered easier among other programming fields, web development still be daunting because of thousands of technologies you need to know", icon: "#globe" },
    { title: "Databases & SQL", desc: "Structured and unstructured (NoSQL) database design, documentation (ERD, class diagrams etc) and complete projects done for you", icon: "#database" },
    { title: "Networking", desc: "Need help with TCP/IP, UDP, sockets, encoding and what not? Our Cisco certified specialists are ready to help you", icon: "#share" },
    { title: "Cyber Security", desc: "CompTIA and CISSP certified professionals to help with your cyber security, information theory and cryptography assignments", icon: "#lock-open" },
    { title: "Matlab", desc: "Having difficulty with MATLAB engineering, analytics, algorithmic, or modelling assignments?", icon: "#variable" },
    { title: "Android/iOS Development", desc: "Java, Kotlin, Swift, Objective-C, React Native/JS and Flutter/Dart expertise from the experts!", icon: "#mobile-s" },
    { title: "Final Year Projects", desc: "Near the completion of your degree, but busy at work? Leave your worries to us. From documentation to end product, we'll deliver everything", icon: "#desktop-computer" },
  ]

  return (
    <>
      <Head title="Computer Science & Programming Help" />
      <section className="flex flex-col md:flex-row-reverse justify-around">
        <Player src={R.anim.programming} style={{ width: "400px", height: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center w-1/3">
          <h1 className="text-5xl font-bold mb-5">Computer Science & Programming Help</h1>
          <p className="text-2xl font-bold text-gray-600">C/C++/C#, Java, Python, JavaScript Assignments & Projects. Theoretical Computer Science Help Available Too.</p>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-3xl font-bold text-center mb-5">Programming, An Art</h2>
        <div className="text-center w-1/3 m-auto">
          <p className="mb-5">Programming is the art of writing clean and efficient code that can clearly communicate with not only computers but also other humans as well.
            It can be anything but easy, that is why you should hire an expert.</p>
          <Link to='/blog/programming-an-art' className="font-bold">Read More</Link>
        </div>
      </section>

      <section className="bg-gray-100 pt-20 pb-10">
        <h2 className="text-3xl font-bold text-center mb-5">Wide Coverage</h2>
        <p className="text-center w-2/3 m-auto">Computer Science and Programming are endless fields of timeless knowledge which require years of experience even for basic understanding.
          We, at WolfieSolutions, are proud to say that our team of experts specialize in majority of the CS subfields that university and college students need help in.
          So what are you waiting for? Stop worrying about that coding project and assignment, and get help now!</p>

        <div className="flex flex-wrap p-10 justify-center">
          {
            csServices.map(s => (
              <div className="flex flex-col w-1/4 rounded-lg bg-white shadow-lg items-center mr-5 mb-5 p-5" key={s.title}>
                <svg className="h-6 w-6 mb-2"><use href={s.icon} /></svg>
                <div className="flex flex-col justify-start text-center">
                  <h2 className="text-gray-900 text-xl font-medium mb-2">{s.title}</h2>
                  <p className="text-gray-700 text-base mb-4">{s.desc}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      {
        samples.length > 0
          ?
          <section className="my-10">
            <h2 className="text-3xl font-bold text-center mb-3">Sample Work</h2>
            <p className="text-gray-600 text-center mb-5">Some sample work we have previously done for our clients.</p>

            <Samples samples={samples} />
          </section>
          : ''
      }

      <section className="p-10">
        <h2 className="text-3xl font-bold text-center mb-3">FAQ</h2>
        <p className="text-gray-600 text-center mb-5">Our answers to your most frequently asked questions.</p> {/* TODO subject specific is better */}

        <FAQSection questionNAnswers={R.faqQuestions} />
      </section>

      {
        reviews.length > 0
          ?
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-center mb-5">Customer Reviews</h2>
            <p className="text-gray-600 text-center mb-5">Good things go together. Like us and our customers!</p>

            <Reviews reviews={reviews} />
          </section>
          : ''
      }

      {
        posts.length > 0
          ?
          <section className="mt-10">
            <h2 className="text-3xl font-bold text-center mb-3">Read More</h2>
            <p className="text-gray-600 text-center">Latest updates and news from our side.</p>

            <Posts posts={posts} />
          </section>
          : ''
      }
    </>
  )
}