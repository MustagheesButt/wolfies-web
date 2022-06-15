import { Disclosure } from "@headlessui/react"

export const FAQSection = ({ questionNAnswers }) => {
  // here assuming there are max 12 QA in the array (which is not guaranteed)
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 md:mr-5">
        {
          questionNAnswers.slice(0, 6).map(f => (
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

      <div className="md:w-1/2">
        {
          questionNAnswers.slice(6).map(f => (
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
    </div>
  )
}