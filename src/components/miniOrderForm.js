import {
  // useEffect,
  useRef,
  useState
} from "react"
// import { useNavigate } from "react-router-dom"

export const MiniOrderForm = () => {
  // const nav = useNavigate()
  const email = useRef()
  const courseCode = useRef()
  // const category = useRef()
  // const deadline = useRef()
  const [status, setStatus] = useState("ready") // ready | sending | sent

  // const [services, setServices] = useState([])

  // useEffect(() => {
  //   fetchServices(setServices)
  // }, [])

  const submitHandler = async (e) => {
    e.preventDefault()

    // nav("/order", { state: {
    //   email: email.current.value,
    //   courseCode: courseCode.current.value,
    //   category: category.current.value,
    //   deadline: deadline.current.value
    // } })

    setStatus("sending")
    await submitRequest({ email: email.current.value, courseCode: courseCode.current.value })
    setStatus("sent")
  }

  return (
    <div className="md:w-3/5 m-auto">
      {
        status === "sending" ? (
          <div>Sending...</div>
        ) : status === "sent" ? (
          <div>Thank you for contacting us. We'll get back to you shortly.</div>
        ) : <form className="w-full" id="quote-form" onSubmit={submitHandler}>
        <h2 className="text-2xl font-bold mb-5">Get Help Now</h2>
  
        <div className="mb-6">
          <label className="hidden">Email</label>
          <input type="email" name="email" ref={email} required placeholder="Email" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
        </div>
  
        <div className="mb-6">
          <label className="hidden">Subject/Course Code</label>
          <input type="text" name="subject" ref={courseCode} placeholder="Subject/Course Code" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
        </div>
  
        {/* <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Service</label>
          <select name="service" ref={category} required placeholder="Select a category/service" className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500">
            {
              services.map(s => (
                <option key={s.id} value={s.id}>{s.name}</option>
              ))
            }
          </select>
        </div>
  
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Deadline
            <input type="datetime-local" name="deadline" ref={deadline} required className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
          </label>
        </div> */}
  
        <div>
          <button className="bg-blue-300 hover:bg-blue-400 text-gray-900 font-bold py-2 px-4 rounded inline-flex items-center" type="submit">
            <span>Get Estimate</span>
          </button>
        </div>
      </form>
      }
    </div>
  )
}

export async function fetchServices(cb) {
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/wolfie/services`)
  const data = await resp.json()

  cb(data)
}

async function submitRequest(reqData) {
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/wolfie/new-request`, {
    method: 'POST',
    body: JSON.stringify(reqData),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await resp.json()

  return data
}