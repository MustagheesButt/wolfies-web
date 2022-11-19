import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Player } from "@lottiefiles/react-lottie-player"
import { Head } from "../../components/layout/head"
import { fetchReviews, Reviews } from "../../components/reviews"
import { fetchPosts, Posts } from "../../components/posts"
import { fetchSamples, Samples } from "../../components/samples"
import { FAQSection } from "../../components/faqSection"
import { R } from "../../res/R"

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