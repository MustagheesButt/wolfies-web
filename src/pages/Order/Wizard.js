import { useState, useRef, useEffect } from "react"

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

export default Wizard