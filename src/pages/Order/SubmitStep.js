import { useState, useEffect } from "react"

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

export default SubmitStep