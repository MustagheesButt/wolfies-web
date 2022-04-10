import { useState } from "react"
import { Link } from "react-router-dom"

export const Navbar = ({ fixed }) => {
  let classes = ""
  if (fixed) {
    classes = "fixed z-10 left-0 right-0 top-0"
  }
  const [active, setActive] = useState(false)

  return (
    <nav className={`${classes} flex flex-wrap justify-center bg-white backdrop-blur-md p-2 text-gray-600 font-bold`}>
      <Link to='/' className="mr-10 hover:text-gray-900 basis-1/3">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} className="inline w-[30px] md:w-[50px]" alt="Logo" />
      </Link>
      <button className="mr-5 basis-1/3" onClick={() => setActive(!active)}>
        <svg aria-hidden="true" focusable="false" class="h-6 w-6">
          <use href="#menu"></use>
        </svg>
      </button>

      <div className={`${active ? '' : 'hidden' } basis-full flex`}>
        <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>
        <Dropdown label="Services" />
        <Link to='/blog' className="mr-5 hover:text-gray-900">Blog</Link>
        <Link to='/contact' className="mr-5 hover:text-gray-900">Contact</Link>
        {/* <span className="mr-5">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span> */}
      </div>
    </nav>
  )
}

const Dropdown = ({ label }) => {
  return (
    <div className="group relative inline-block">
      <button className="mr-5 hover:text-gray-900 font-bold">
        {label}
        {/* <!-- Heroicon name: solid/chevron-down --> */}
        <svg className="-mr-1 ml-1 h-5 w-5 inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      <div className="absolute hidden group-hover:block w-56 pt-5 text-gray-400  focus:outline-none text-left" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
        <div className="py-1 shadow-lg bg-black/75 rounded-md" role="none">
          {/* <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" --> */}
          <a href="/services/" className="block px-4 py-2 text-sm hover:bg-black" role="menuitem" tabIndex="-1" id="menu-item-0">Assignments</a>
          <a href="/services/" className="block px-4 py-2 text-sm hover:bg-black" role="menuitem" tabIndex="-1" id="menu-item-1">Thesis Writing</a>
          <a href="/services/" className="block px-4 py-2 text-sm hover:bg-black" role="menuitem" tabIndex="-1" id="menu-item-2">Final Year Projects</a>
        </div>
      </div>
    </div>
  )
}