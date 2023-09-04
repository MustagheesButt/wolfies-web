import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
//import { FormattedPrice } from "../../components/formattedPrice"
import { Layout } from "../../components/layout"
//import { fetchServices } from "../../components/miniOrderForm"
import Wizard from "./Wizard"
import DetailsForm from "./DetailsForm"
import PersonalDetails from "./PersonalDetails"
import SubmitStep from "./SubmitStep"
//import { findService } from "./utils"

export const Order = () => {
  const nav = useNavigate()
  const location = useLocation()
  const { category } = location.state

  const [pageCount, setPageCount] = useState(1)
  //const PRICE_PER_PAGE = 10

  //const [services, setServices] = useState([])
  const [serviceId, setServiceId] = useState(category)
  const [selectedSubjId, setSelectedSubjId] = useState()

  //const service = findService(serviceId, services)
  //const basePrice = service ?
  //  (service.variations && selectedSubjId ?
  //    service.variations.find(v => v.variation_id === parseInt(selectedSubjId))?.display_price : service.price)
  //  : 0
  //const price = parseFloat(basePrice) + (pageCount * PRICE_PER_PAGE)

  //useEffect(() => {
  //  fetchServices(setServices)
  //}, [])

  // if serviceId is changed, reset selected subject
  useEffect(() => {
    setSelectedSubjId(undefined)
  }, [serviceId])

  const submitHandler = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    for (var pair of fd.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    const resp = await submitOrder(fd)
    console.log("in handler", resp)

    if (resp) {
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

          {/*<div className="md:w-1/3 text-center my-auto px-10">
            <h2 className="text-gray-500">ESTIMATE</h2>
            <div className="text-5xl font-bold mb-5">
              <FormattedPrice price={price} />
            </div>
            <p>Final price will be given after we have reviewed all the documents and requirements submitted by you.</p>
          </div>*/}
          <div className="flex md:flex-col mt-[10%] gap-6 mt-10 flex-1 items-center">
            <a href="whatsapp://send?phone=+923104515123" target='_blank' rel="noreferrer" className="text-blue-500">
              <svg className="w-16 h-16">
                <use href="#whatsapp" />
              </svg>
            </a>

            <a href="https://facebook.com/wolfie.solutions/" target='_blank' rel="noreferrer" className="text-blue-500">
              <svg className="w-16 h-16">
                <use href="#facebook" />
              </svg>
            </a>

            <a href="https://instagram.com/wolfie.solutions/" target='_blank' rel="noreferrer" className="text-pink-500">
              <svg className="w-16 h-16">
                <use href="#instagram" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}

async function submitOrder(orderData) {
  const resp = await fetch(`${import.meta.env.VITE_API_URL}/wolfie/create-unpaid-order`, {
    method: 'POST',
    body: orderData
  })
  const data = await resp.json()

  return data
}
