import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { FormattedPrice } from "../components/formattedPrice"
import { Layout } from "../components/layout"
import { fetchServices } from "../components/miniOrderForm"

export const Order = () => {
  const location = useLocation()
  const { email, courseCode, category, deadline } = location.state

  const [pageCount, setPageCount] = useState(1)
  const PRICE_PER_PAGE = 30

  const [services, setServices] = useState([])
  const [service, setService] = useState(category)

  useEffect(() => {
    fetchServices(setServices)
  }, [])

  const subjects = {
    "Management": ["Business Administration", "Leadership"],
    "Programming": ["Web Applications", "Mobile Applications", "Desktop Applications", "Console Applications", "Linux"],
    "Medical": ["Nursing", "Healthcare"]
  }

  const submitHandler = (e) => {
    e.preventDefault()
    alert("Not Implemented")
  }

  return (
    <Layout>
      <section className="m-10">
        <h1 className="text-3xl font-bold mb-2">Order Form</h1>
        <p className="mb-5">Enter details to get an estimate. Submit to get a quote from our team.</p>

        <div className="flex">
          <form className="w-2/3" id="quote-form" onSubmit={submitHandler}>
            <div className="mb-6">
              <label className="hidden">Email</label>
              <input type="email" name="email" placeholder="Email" defaultValue={email} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            </div>

            <div className="mb-6">
              <label className="hidden">Subject/Course Code</label>
              <input type="text" name="subject" defaultValue={courseCode} placeholder="Subject/Course Code" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Service</label>
              <select name="service" placeholder="Select a category/service" value={service} onChange={e => setService(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                {
                  services.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))
                }
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
              <select name="service" placeholder="Select a subject" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
                {
                  Object.keys(subjects).map(s => (
                    <optgroup key={s} label={s}>
                      {
                        subjects[s].map(ss => (
                          <option key={ss}>{ss}</option>
                        ))
                      }
                    </optgroup>
                  ))
                }
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Deadline
                <input type="datetime-local" name="deadline" defaultValue={deadline} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
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

            {/* <div className="md:flex md:items-center mb-6">
              <label className="block text-gray-500 font-bold">
                <input type="checkbox" name="tos" className="mr-2 leading-tight" />
                <span className="text-sm">By continuing you agree to our terms of service.</span>
              </label>
            </div> */}

            <div>
              <button className="bg-blue-300 hover:bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center" type="submit">
                <span>Get Quote</span>
              </button>
            </div>
            <XD>
              <h1>123</h1>
              <h2>234</h2>
            </XD>
          </form>

          <div className="w-1/3 text-center my-auto px-10">
            <h2 className="text-gray-500">ESTIMATE</h2>
            <div className="text-5xl font-bold mb-5">
              <FormattedPrice price={parseFloat(findService(service, services)?.price) + (pageCount * PRICE_PER_PAGE)} />
            </div>
            <p>Final price will be given after we have reviewed all the documents and requirements submitted by you.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const XD = ({ children }) => {
  return (
    <>
      {children.length}
    </>
  )
}

function findService(id, services) {
  return services.find(s => s.id.toString() === id)
}