import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { fetchServices } from "../../components/miniOrderForm"
import { mapSubjects, findService } from "./utils"

const DetailsForm = ({ pageCount, setPageCount, serviceId, setServiceId, selectedSubjId, setSelectedSubjId }) => {
  const location = useLocation()
  const { courseCode, deadline } = location.state

  const [services, setServices] = useState([])
  const [subjects, setSubjects] = useState({})

  useEffect(() => {
    fetchServices(setServices)
  }, [])

  useEffect(() => {
    const data = findService(serviceId, services)

    if (data?.variations) {
      setSubjects(mapSubjects(data.variations))
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

export default DetailsForm