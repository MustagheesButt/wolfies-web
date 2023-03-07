import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

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

export default PersonalDetails