import { Player } from "@lottiefiles/react-lottie-player"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { Layout } from "../components/layout"
import { Reviews, fetchReviews } from "../components/reviews"

import { R } from "../res/R"
import { FAQSection } from "../components/faq_section"

export const Home = () => {
  const vidTitles = [
    ["Tired Of Boring Assignments?", "Have other things that need your time and attention?"],
    ["Feeling Stressed Out?", "Have other things that need your time and attention?"],
    ["Don't Let Studies Stress You", "Enjoy your life while we take care of the stress work."],
    ["You've Got Better Things To Do", "Save your precious time. Let us handle your assignments & projects."],
  ]
  const [currentTitle, setCurrentTitle] = useState(0)
  const [pageCount, setPageCount] = useState(1)

  const [customerReviews, setCustomerReviews] = useState([])

  useEffect(() => {
    fetchReviews(setCustomerReviews, 3)

    function setBgVid() {
      const vidSrc = document.querySelector('video source')
      const full = `${process.env.REACT_APP_UPLOADS_DIR}/2022/05/Full-Ad.webm`
      const mobile = `${process.env.REACT_APP_UPLOADS_DIR}/2022/05/Full-Ad-Mobile.webm`

      if (window.screen.availWidth <= 480 && vidSrc.src !== mobile) {
        vidSrc.src = mobile
      } else if (vidSrc.src !== full) {
        vidSrc.src = full
      }
      document.querySelector('video').load()
    }

    window.onresize = () => {
      setBgVid()
    }
    setBgVid()

    const vid = document.querySelector('video')
    vid.onplaying = () => {
      vid.parentElement.classList.remove('min-h-screen')
    }

    const idx = setInterval(() => {
      if (vid.currentTime < 4) {
        setCurrentTitle(0)
      } else if (vid.currentTime < 12) {
        setCurrentTitle(1)
      }else if (vid.currentTime < 31) {
        setCurrentTitle(2)
      } else if (vid.currentTime < 47) {
        setCurrentTitle(3)
      }
    }, 1000)

    return () => {
      clearInterval(idx)
    }
  }, [])

  const featuredServices = [
    ["Assignments/Homework", "Our essay & assignment experts possess great skill in writing assignments. Lecturers, professors and industry practitioners provide impeccable writing services across the globe to students from K-12 to Ph.D. level.", "/assignments"],
    ["Thesis/Dissertations", "We understand that each course has different requirements in terms of research methodologies. This is the reason we assign subject-specific experts who can give you the best idea on whether quantitative and qualitative research is appropriate for you.", "/thesis-writing"],
    ["Programming & Final Year Projects", "Not only aids students to achieve academic excellence by providing custom writing help but also acquire useful knowledge from the subject experts. Our team of essay assignment helpers will make sure that each order is written from scratch, giving every student a quality custom essay and delivered on time.", "/computer-science-programming"]
  ]

  /* TODO: Add animated SVG line */
  // useEffect(() => {
  //   const path = document.querySelector('svg')
  //   const pathLength = path.getTotalLength()

  //   path.style.strokeDasharray = pathLength + ' ' + pathLength
  //   path.style.strokeDashoffset = pathLength

  //   window.addEventListener('scroll', () => {
  //     const scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop)
  //     const drawLength = pathLength * scrollPercentage

  //     path.style.strokeDashoffset = pathLength - drawLength
  //   })
  // })

  return (
    <Layout fixedNav={false}>
      <section className="relative bg-black min-h-screen">
        <video autoPlay muted loop style={{ height: "100%" }} className="mx-auto" poster={`${process.env.PUBLIC_URL}/static/images/poster.webp`}>
          <source src='' type="video/webm" />
        </video>

        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800/50 text-white/90 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">{vidTitles[currentTitle][0]}</h1>
          <p className="text-2xl md:text-3xl my-5 font-serif italic mx-10">{vidTitles[currentTitle][1]}</p>
          <div className="mt-5">
            <a href="#quote-form" className="border-2 p-3 rounded hover:bg-white hover:text-black mr-5 transition duration-500">I'm Feeling Lucky</a>
            <Link to="/services" className="bg-blue-400/30 border-2 border-blue-200 p-3 rounded hover:bg-blue-500 transition duration-500">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-col">
        <div className="py-10 px-5">
          <div data-aos="fade-up">
            <h1 className="text-4xl font-bold text-center mb-3">Trusted By</h1>
            <h2 className="text-center">Students & Faculty at</h2>
          </div>

          <div className="flex h-20 overflow-x-scroll mt-10 md:justify-around" data-aos="fade-up">
            <img src={R.images.harvard.src} alt={R.images.harvard.alt} className="mr-5" />
            <img src={R.images.uni_sydney.src} alt={R.images.uni_sydney.alt} className="mr-5" />
            <img src={R.images.princeton.src} alt={R.images.princeton.alt} className="mr-5" />
            <img src={R.images.uni_manchester.src} alt={R.images.uni_manchester.alt} className="mr-5" />
            <img src={R.images.stanford.src} alt={R.images.stanford.alt} className="mr-5" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row p-10 justify-around">
          <div className="w-full md:2/5 text-center md:text-left">
            <Player src="https://assets6.lottiefiles.com/packages/lf20_calza6zj.json" className="max-w-[400px]" autoplay loop />

            <h1 className="text-4xl font-bold my-5 text-gray-800">Expertise! From The Experts!</h1>
            <p className="text-gray-600 mb-5 w-2/3">Whether you are running short on a deadline or looking for the highest grade quality content,
            our team of 1000+ industry-leading professionals, PhD professors and field experts have got you covered. So sit back and relax!</p>
            <ul className="text-gray-600">
              <li className="mb-1">
                <svg className="h-5 w-5 inline text-green-500 mr-1"><use href="#badge-check-s" /></svg>
                Unlimited Revisions
              </li>
              <li className="mb-1">
                <svg className="h-5 w-5 inline text-green-500 mr-1"><use href="#badge-check-s" /></svg>
                Quality Control
              </li>
              <li className="mb-1">
                <svg className="h-5 w-5 inline text-green-500 mr-1"><use href="#badge-check-s" /></svg>
                Privacy & Security
              </li>
              <li className="mb-1">
                <svg className="h-5 w-5 inline text-green-500 mr-1"><use href="#badge-check-s" /></svg>
                100% Unique Assignments
              </li>
              <li className="mb-1">
                <svg className="h-5 w-5 inline text-green-500 mr-1"><use href="#badge-check-s" /></svg>
                Timely Project Deliveries
              </li>
            </ul>
          </div>

          <form className="w-full md:w-3/5 m-auto" id="quote-form">
            <div className="mb-6">
              <label className="hidden">Email</label>
              <input type="email" name="email" placeholder="Email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            </div>

            <div className="mb-6">
              <label className="hidden">Subject/Course Code</label>
              <input type="text" name="subject" placeholder="Subject/Course Code" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Category</label>
              <select name="service" placeholder="Select a category/service" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                <option>Assignments</option>
                <option>Assessments</option>
                <option>Business Plan</option>
                <option>Case Study</option>
                <option>Dissertations</option>
                <option>Essays</option>
                <option>FYP</option>
                <option>Programming</option>
                <option>Report Writing</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Deadline
                <input type="datetime-local" name="deadline" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
              </label>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pages">No. of Pages</label>
              <input type="number" name="pages" placeholder="No. of pages" min={1} value={pageCount} onChange={(e) => setPageCount(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
              <span>({pageCount * 250} words)</span>
            </div>

            <div className="mb-6">
              <label className="hidden">Description</label>
              <textarea name="description" placeholder="Description - Any other notes you might want to add" rows="4" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"></textarea>

              <div className="flex justify-center mt-8">
                <div className="rounded-lg shadow-xl bg-gray-50">
                  <div className="m-4">
                    <label className="inline-block mb-2 text-gray-500">Upload
                      Documents (pdf, docx, txt, zip, rar, jpg, png)</label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                        <div className="flex flex-col items-center justify-center pt-7">
                          <svg xmlns="http://www.w3.org/2000/svg"
                            className="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd" />
                          </svg>
                          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a document</p>
                        </div>
                        <input type="file" className="opacity-0" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:flex md:items-center mb-6">
              <label className="block text-gray-500 font-bold">
                <input type="checkbox" name="tos" className="mr-2 leading-tight" />
                <span className="text-sm">By continuing you agree to our terms of service.</span>
              </label>
            </div>

            <div>
              <button className="bg-blue-300 hover:bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center" type="submit">
                <span>Get Quote</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="p-10 mt-10">
        <h1 className="text-md font-bold text-center text-gray-500 mb-3">FEATURES</h1>
        <h2 className="text-4xl font-bold text-center mb-12">More Than Just An Assignment Service</h2>

        <div className="flex flex-col md:flex-row justify-around items-center my-10">
          <div className="md:mr-10 mb-5" data-aos="fade-up" data-aos-delay="0">
            <svg className="h-10 w-10 m-auto">
              <use href="#document-search" />
            </svg>

            <h3 className="font-bold text-center mt-5">Guaranteed Plagiarism Free</h3>
            <p className="text-center">
              We ensure projects delivered by us are original, organized, and written from scratch.
            </p>
          </div>

          <div className="md:mr-10 mb-5" data-aos="fade-up" data-aos-delay="300">
            <svg className="h-10 w-10 m-auto">
              <use href="#document-report" />
            </svg>

            <h3 className="font-bold text-center mt-5">TurnitIn Report</h3>
            <p className="text-center">
              To ensure originality, we provide our customers a free TurnitIn report.
            </p>
          </div>

          <div className="md:mr-10 mb-5" data-aos="fade-up" data-aos-delay="600">
            <svg className="h-10 w-10 m-auto">
              <use href="#user-group" />
            </svg>

            <h3 className="font-bold text-center mt-5">24x7 Customer Support</h3>
            <p className="text-center">
              We work around the clock to guarantee that your assignments get submitted on time.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-center mb-10">Best Selling Services</h1>

        <div className="flex flex-wrap justify-center">
          {
            featuredServices.map((s, index) => (
              <div className="mr-5 mb-5 block rounded-lg shadow-lg bg-white max-w-sm text-center" key={s[0]} data-aos="flip-right" data-aos-delay={(index + 1) * 300}>
                <div className="p-6">
                  <h2 className="text-gray-900 text-xl font-medium mb-2">{s[0]}</h2>
                  <p className="text-gray-700 text-base mb-4">
                    {s[1]}
                  </p>
                  <Link to={`/services${s[2]}`} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Learn More
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="p-10">
        <h1 className="text-4xl font-bold text-center mb-3">Frequently Asked Questions</h1>
        <p className="text-center mb-10">If you have more questions, head over to <Link to='/contact' className="text-blue-500">contact us</Link> page.</p>

        <FAQSection questionNAnswers={R.faqQuestions} />
      </section>

      {customerReviews.length > 0 ?
        <section className="pt-10 pb-20 bg-gray-100">
          <h1 className="text-4xl font-bold text-center mb-3">Customer Reviews</h1>
          <p className="text-center">Some of the amazing things our customers have to say about us.</p>

          <Reviews reviews={customerReviews} />
        </section> : ''
      }
    </Layout >
  )
}