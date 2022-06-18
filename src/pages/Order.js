import { useState, useEffect, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { FormattedPrice } from "../components/formattedPrice"
import { Layout } from "../components/layout"
import { fetchServices } from "../components/miniOrderForm"

export const Order = () => {
  const nav = useNavigate()
  const location = useLocation()
  const { category } = location.state

  const [pageCount, setPageCount] = useState(1)
  const PRICE_PER_PAGE = 30

  const [services, setServices] = useState([])
  const [serviceId, setServiceId] = useState(category)
  const [selectedSubjId, setSelectedSubjId] = useState()

  const service = findService(serviceId, services)
  const basePrice = service ?
    (service.variations && selectedSubjId ?
      service.variations.find(v => v.variation_id === parseInt(selectedSubjId)).display_price : service.price)
    : 0
  const price = parseFloat(basePrice) + (pageCount * PRICE_PER_PAGE)

  useEffect(() => {
    fetchServices(setServices)
  }, [])

  const submitHandler = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    for (var pair of fd.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    if (true) {
      nav('/congratulations')
    } else {
      alert("Something went wrong. Could not place order")
    }
  }

  return (
    <Layout>
      <section className="m-10">
        <h1 className="text-3xl font-bold mb-2">Order Form</h1>
        <p className="mb-5">Enter details to get an estimate. Submit to get a quote from our team.</p>

        <div className="flex flex-col md:flex-row">
          <form className="md:w-2/3 min-h-[480px] md:p-10" id="quote-form" onSubmit={submitHandler}>
            <Wizard>
              <DetailsForm
                pageCount={pageCount} setPageCount={setPageCount}
                serviceId={serviceId} setServiceId={setServiceId}
                selectedSubjId={selectedSubjId} setSelectedSubjId={setSelectedSubjId} />
              <PersonalDetails />
              <SubmitStep />
            </Wizard>
          </form>

          <div className="md:w-1/3 text-center my-auto px-10">
            <h2 className="text-gray-500">ESTIMATE</h2>
            <div className="text-5xl font-bold mb-5">
              <FormattedPrice price={price} />
            </div>
            <p>Final price will be given after we have reviewed all the documents and requirements submitted by you.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

const Wizard = ({ children }) => {
  const [step, setStep] = useState(0)
  const activeStepRef = useRef()

  const prev = (e) => {
    e.preventDefault() // to prevent form submission
    if (step >= 1)
      setStep(step - 1)
  }
  const next = (e) => {
    e.preventDefault()
    const focusableInputs = document.querySelectorAll('.step')[step].querySelectorAll('input')
    if ([...focusableInputs].reduce((x, y) => x && y.reportValidity(), true) && step < (children.length - 1))
      setStep(step + 1)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    document.querySelectorAll(".step").forEach(s => {
      s.classList.add('h-0')
    })
    activeStepRef.current.classList.remove('h-0')
  }, [step])

  return (
    <>
      {children.map((child, i) => {
        return (
          <div key={i} ref={i === step ? activeStepRef : null} className="step h-0">
            {child}
          </div>
        )
      })}

      <div className="mt-5">
        {step > 0 &&
          <button onClick={prev} className="bg-blue-300 hover:bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center mr-5">Prev</button>}
        {step < (children.length - 1) &&
          <button onClick={next} className="bg-blue-300 hover:bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center">Next</button>}
      </div>
    </>
  )
}

const DetailsForm = ({ pageCount, setPageCount, serviceId, setServiceId, selectedSubjId, setSelectedSubjId }) => {
  const location = useLocation()
  const { courseCode, deadline } = location.state

  const [services, setServices] = useState([])
  const [subjects, setSubjects] = useState({})

  useEffect(() => {
    fetchServices(setServices)
  }, [])

  const getMainCat = (cat) => {
    return cat.split('_')[0]
  }
  const getCatName = (cat) => {
    return cat.split('_')[1]
  }

  useEffect(() => {
    const data = findService(serviceId, services)

    if (data?.variations) {
      const newData = {}
      data.variations.forEach(v => {
        if (!newData[getMainCat(v.attributes.attribute_pa_subject)]) newData[getMainCat(v.attributes.attribute_pa_subject)] = []
        newData[getMainCat(v.attributes.attribute_pa_subject)].push(
          { id: v.variation_id, name: getCatName(v.attributes.attribute_pa_subject), price: v.display_price }
        )
      })
      setSubjects(newData)
    } else {
      setSubjects([])
    }
  }, [serviceId, services])


  return (
    <>
      <div className="mb-6">
        <label className="hidden">Subject/Course Code</label>
        <input type="text" name="coursecode" required defaultValue={courseCode} placeholder="Subject/Course Code" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Service</label>
        <select name="service" required value={serviceId} onChange={e => setServiceId(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
          {
            services.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))
          }
        </select>
      </div>

      {Object.keys(subjects).length !== 0 &&
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject</label>
          <select name="subject" required value={selectedSubjId} onChange={e => setSelectedSubjId(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
            {
              Object.keys(subjects).map(s => (
                <optgroup key={s} label={s}>
                  {
                    subjects[s].map(ss => (
                      <option key={ss.id} value={ss.id}>{ss.name}</option>
                    ))
                  }
                </optgroup>
              ))
            }
          </select>
        </div>
      }

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Deadline
          <input type="datetime-local" required name="deadline" defaultValue={deadline} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
        </label>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pages">No. of Pages</label>
        <input type="number" name="pages" placeholder="No. of pages" min={1} value={pageCount} onChange={(e) => setPageCount(e.target.value)} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
        <span>({pageCount * 250} words)</span>
      </div>

      <div className="mb-6">
        <label className="hidden">Description</label>
        <textarea name="description" placeholder="Description - Details and any other notes you might want to add" rows="4" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"></textarea>

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
    </>
  )
}

const PersonalDetails = () => {
  const location = useLocation()
  const { email } = location.state

  const [countries, setCountries] = useState([])

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/wolfie/get-countries`)
      .then(async data => {
        const countries = await data.json()
        setCountries(countries)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <div className="mb-6">
        <label className="hidden">Email</label>
        <input type="email" name="email" required placeholder="Email" defaultValue={email} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
      </div>

      <div className="mb-6">
        <label className="hidden">First Name</label>
        <input type="text" name="firstname" required placeholder="First name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
      </div>

      <div className="mb-6">
        <label className="hidden">Last Name</label>
        <input type="text" name="lastname" placeholder="Last name" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
      </div>

      <div className="mb-6">
        <label className="">Country</label>
        <select name="country" required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
          {
            Object.keys(countries).map(c => (
              <option key={c} value={c}>{countries[c]}</option>
            ))
          }
        </select>
      </div>

      <div className="mb-6">
        <label className="hidden">State</label>
        <input type="text" name="state" placeholder="State" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
      </div>

      <div className="mb-6">
        <label className="hidden">City</label>
        <input type="text" name="city" required placeholder="City" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
      </div>
    </>
  )
}

const SubmitStep = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const form = document.querySelector('#quote-form')
    form.onchange = () => {
      setData(new FormData(form))
    }
  }, [])

  return (
    <>
      <h3 className="font-bold">Summary</h3>
      <div>
        Course Code: {data?.get('coursecode')}
      </div>
      <div>
        Service: {data?.get('service')}
      </div>
      <div>
        Subject: {data?.get('subject')}
      </div>
      <div>
        Deadline: {data?.get('deadline')}
      </div>

      <strong className="block">Personal Details</strong>
      <div>
        First Name: {data?.get('firstname')}
      </div>
      <div>
        Last Name: {data?.get('lastname')}
      </div>
      <div>
        Email: {data?.get('email')}
      </div>
      <div>
        Country: {data?.get('country')}
      </div>
      <div>
        State: {data?.get('state')}
      </div>
      <div>
        City: {data?.get('city')}
      </div>

      <strong className="block">Payment Details</strong>
      <p className="mb-5">You can pay through direct bank transfer, after we look at the details and documents you have
        submitted, and send you a final quote through email.</p>

      <button className="bg-blue-300 hover:bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center" type="submit">
        <span>Get Quote</span>
      </button>
    </>
  )
}

function findService(id, services) {
  return services.find(s => s.id.toString() === id)
}