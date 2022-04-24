import { Disclosure } from "@headlessui/react"
import { useEffect, useState } from "react"
import { Layout } from "../components/layout"

import { R } from "../res/R"

export const Home = () => {
  const AB = [
    ["You've Got Better Things To Do", "Save your precious time. Let us handle your assignments & projects."],
    ["Don't Let Studies Stress You", "Enjoy your life while we take care of the stress work."]
  ]
  const ab = AB[parseInt(Math.random() * 10) % 2]
  const [pageCount, setPageCount] = useState(1)

  const faqQuestions = [
    ["Why Should I Choose WolfieSolutions' Help?", "WolfieSolutions is one such website that has 2500+ experts having in-depth knowledge and years of experience. We guarantee every student to provide with high-quality assignments. We provide a number of exclusive features that allow a student to have complete solution to all their writing issues. We have been trusted by millions of students with their assignment writing work throughout the world. You should choose us because we provide you with what you exactly need."],
    ["What Services Do You Provide Other Than Assignment Writing?", "At WolfieSolutions, you will get a wide variety of services, such as assignment writing, essay writing, dissertation writing, thesis writing, homework writing, coursework writing, resume writing, PPT making, poster making, online exam help, and many others. You can check out our 'Services' section to get an insight of everything that we offer to students."],
    ["Is It Ethical to Hire Assignment Writing Services?", "Our assignment writing help is completely ethical as the papers that we offer are meant for reference purpose only. We do not recommend you to submit them as they are to your professor. We provide assignments to students so that they can get an insight into the topic and get ideas to prepare their own assignment. This is completely legal. For better understanding of the usage of assignment, you can refer to our 'Usage Policy.'"],
    ["Do You Provide Revisions? What Are the Charges?", "Yes, we provide unlimited revisions to every customer if they feel dissatisfied with the work. We do not take even a single penny for making the changes. So, if you find some loopholes in the assignments or feel that we have missed something, then you can tell our customer care executives. Our experts will work on the suggested changes and deliver the assignment as soon as they can. However, you can't change assignment requirements at the time of revisions. If you wish to do so, then you will have to pay additional nominal fee."],
    ["How Do You Accept Payments? What Currencies Do You Accept?", "We take payment through Paypal which is a highly secure payment channel and provides security to customers as well as merchants. To open an account, you can reach to paypal.com and register yourself by providing your bank or card details. We prefer GBP from UK and USD from the rest of the countries. However, we also take payment in AUD, SGD, and NZD."],
    ["Can I Contact the Writer Working on My Assignment?", "To make sure the maintenance of standard conversation, we don’t allow our customers to directly contact our writers. Our customer care experts acts as a bridge between you and our writers so you can convey all your messages to them which will be further forwarded to the concerning experts. However, if you share your queries through mail, then our experts will see it directly."],

    ["How Much Time Do You Take to Finish an Assignment?", "It depends on the requirements of the assignment that you have shared with us. Our professionals work day and night tirelessly so that you can submit your assignment on time. If you have urgent delivery request, then our professionals will provide you the assignments within 24 hours. We have a special team of writers who are well-trained to meet urgent deadlines. The prices for urgent orders are slightly high as our experts write high-quality assignment in a very short time. We will suggest you to give us advanced delivery so that we can send the work to you before the deadline and you get sufficient time to go through it."],
    ["How Can I Be Assured That the Assignment Is Not Plagiarized?", "Our highly qualified and competent professionals possess years of experience in academic writing industry and have in-depth knowledge of their respective areas. Every assignment they work on is drafted from the ground up and nothing is copied. The facts and ideas of other authors that we include in the document are cited properly. Moreover, we provide a Turnitin report along with all the orders which ensures that the work is completely authentic and all the sources from where the information is taken are cited. The best part is that this report is provided for free."],
    ["What Are the Different Assignment Standards That You Provide?", "We offer three different assignment standards to students which are- First Class, 2:1, and 2:2. At the time of placing an order, you can mention in the form about the standard in which you want the assignment. The quality provided in all the standards is excellent; however, it slightly varies depending on a few factors, such as price, deadline, and the skill of experts who are working on it."],
    ["What If I Fail My Assignment? Will I Get My Money Back?", "Our professionals work with all their might to provide high-quality assignments that can get our clients excellent grades. However, if due to some reasons you get bad grades or fail the assignment, then you will get the money back to your account within 5-6 working days. However, make sure that the claim you are making for the refund is on justifiable grounds. We do not provide any refund if the assignment fails to bear its purpose due to your personal reasons."],
    ["How Much Do You Charge for Assignment? Can I Pay in Installments?", "The price of every assignment varies as per several factors, such as word count, deadline, topic, referencing style, formatting style, etc. When you fill the order form and submit all your requirements to us, we provide you a final price of the assignment which includes all the taxes. Our pricing structure is transparent and we don't have any hidden charges. We allow our customers to make payment in installments. We charge 50% rate of the assignment before starting the work. You can pay the remaining 50% amount at the time of delivery."],
    ["Do You Resell Your Assignments to Other Customers?", "No, we strictly refrain from doing any such thing. All the papers that we write are unique and meant for a single user only. So, you can be assured that your assignment will not be delivered to any other customer in any circumstances. To assure the same, we provide ownership guarantee to the customers."]
  ]

  const customerReviews = [
    { id: 1, title: "Excellet service!", description: "I was very satisfied with the result, got 90% in my assignment.", customerName: "Hope Dworaczyk", customerPhoto: "https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg", rating: 5 },
    { id: 2, title: "Got 90%! Wew", description: "I would've been happy even if i got just 60%. Will work with them again", customerName: "John Rich", rating: 5 },
    { id: 3, title: "Excellet service!", description: "I was very satisfied with the result, got 90% in my assignment.", customerName: "Gary", rating: 5 },
    { id: 4, title: "Excellet service!", description: "I was very satisfied with the result, got 90% in my assignment.", customerName: "DJ Trump", rating: 5 }
  ]

  const featuredServices = [
    ["Assignments/Homework", "Our essay & assignment experts possess great skill in writing assignments. Lecturers, professors and industry practitioners provide impeccable writing services across the globe to students from K-12 to Ph.D. level."],
    ["Thesis/Dissertations", "We understand that each course has different requirements in terms of research methodologies. This is the reason we assign subject-specific experts who can give you the best idea on whether quantitative and qualitative research is appropriate for you."],
    ["Programming & Final Year Projects", "Not only aids students to achieve academic excellence by providing custom writing help but also acquire useful knowledge from the subject experts. Our team of essay assignment helpers will make sure that each order is written from scratch, giving every student a quality custom essay and delivered on time."]
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
      <section className="relative bg-black">
        <video autoPlay muted loop style={{ height: "100%" }} className="mx-auto">
          <source src={`${process.env.PUBLIC_URL}/home-bg-5182689.mp4`} type="video/mp4" />
        </video>

        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-800/50 text-white/90 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold">{ab[0]}</h1>
          <p className="text-2xl md:text-3xl mt-5 font-serif italic mx-10">{ab[1]}</p>
        </div>
      </section>

      <section className="">
        <div className="py-10 px-5">
          <h1 className="text-4xl font-bold text-center">Trusted By</h1>
          <h2 className="text-center">Students & Faculty at</h2>

          <div className="flex h-20 overflow-x-scroll mt-10 md:justify-around">
            <img src={R.images.harvard.src} alt={R.images.harvard.alt} className="mr-5" />
            <img src={R.images.uni_sydney.src} alt={R.images.uni_sydney.alt} className="mr-5" />
            <img src={R.images.princeton.src} alt={R.images.princeton.alt} className="mr-5" />
            <img src={R.images.uni_manchester.src} alt={R.images.uni_manchester.alt} className="mr-5" />
            <img src={R.images.stanford.src} alt={R.images.stanford.alt} className="mr-5" />
          </div>
        </div>

        <div className="p-10">
          <h1 className="text-4xl font-bold mb-5 text-center">Expertise! From The Experts!</h1>
          <h2 className="text-3xl font-bold mb-5 text-center">Get Help Now</h2>

          <form className="w-full max-w-sm m-auto">
            <div className="mb-6">
              <input type="email" name="email" placeholder="Email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            </div>

            <div className="mb-6">
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
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="deadline">Deadline</label>
              <input type="datetime-local" name="deadline" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pages">No. of Pages</label>
              <input type="number" name="pages" placeholder="No. of pages" min={1} value={pageCount} onChange={(e) => setPageCount(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
              <span>({pageCount * 250} words)</span>
            </div>

            <div className="mb-6">
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
              <button className="bg-gray-300 hover:bg-purple-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center" type="submit">
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="p-10">
        <h1 className="text-4xl font-bold text-center">Features</h1>

        <div className="flex flex-col md:flex-row justify-around items-center my-10">
          <div className="md:mr-10 mb-5">
            <svg className="h-10 w-10 m-auto">
              <use href="#document-search" />
            </svg>
            Guaranteed Plagiarism Free
          </div>

          <div className="md:mr-10 mb-5">
            <svg className="h-10 w-10 m-auto">
              <use href="#document-report" />
            </svg>
            TurnitIn Report
          </div>

          <div className="md:mr-10 mb-5">
            <svg className="h-10 w-10 m-auto">
              <use href="#user-group" />
            </svg>
            24x7 Customer Support
          </div>
        </div>
      </section>

      <section className="bg-gray-100 p-10">
        <h1 className="text-4xl font-bold text-center mb-10">Best Selling Services</h1>

        <div className="flex flex-wrap justify-center">
          {
            featuredServices.map(s => (
              <div className="mr-5 mb-5 block rounded-lg shadow-lg bg-white max-w-sm text-center" key={s[0]}>
                <div className="p-6">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">{s[0]}</h5>
                  <p className="text-gray-700 text-base mb-4">
                    {s[1]}
                  </p>
                  <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                    Learn More
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      </section>

      <section className="p-10">
        <h1 className="text-4xl font-bold text-center mb-10">Frequently Asked Questions</h1>
        <div className="">
          {
            faqQuestions.slice(0, 6).map(f => (
              <Disclosure as="div" className="mt-2" key={f[0]}>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>{f[0]}</span>
                  <svg className="transform rotate-180 w-6 h-6 text-blue-500">
                    <use href="#dropdown" />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <article className="p-4">{f[1]}</article>
                </Disclosure.Panel>
              </Disclosure>)
            )
          }
        </div>

        <div className="">
          {
            faqQuestions.slice(6).map(f => (
              <Disclosure as="div" className="mt-2" key={f[0]}>
                <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-blue-900 bg-blue-100 rounded-lg hover:bg-blue-200 focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                  <span>{f[0]}</span>
                  <svg className="transform rotate-180 w-6 h-6 text-blue-500">
                    <use href="#dropdown" />
                  </svg>
                </Disclosure.Button>
                <Disclosure.Panel>
                  <article className="p-4">{f[1]}</article>
                </Disclosure.Panel>
              </Disclosure>)
            )
          }
        </div>
      </section>

      <section className="pt-10 pb-20 bg-gray-100">
        <h1 className="text-4xl font-bold text-center">Customer Reviews</h1>

        <div className="flex overflow-x-scroll p-10">
          {
            customerReviews.map(r => (
              <div className="shrink-0 mr-10 relative flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" key={r.id}>
                <img className="object-cover w-24 h-24 absolute -left-6 top-7 rounded-full" src={r.customerPhoto ? r.customerPhoto : `${process.env.PUBLIC_URL}/profile.webp`} alt="" />
                <div className="p-6 pl-24 flex flex-col justify-start">
                  <h5 className="text-gray-900 text-xl font-medium mb-2">{r.title}</h5>
                  <p className="text-gray-700 text-base mb-4">
                    {r.description}
                  </p>
                  <p className="text-gray-600 text-xs">{r.customerName}</p>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </Layout >
  )
}