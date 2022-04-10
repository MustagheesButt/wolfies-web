import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <section className="flex flex-col md:flex-row m-auto py-5 w-3/5 border-b-2 justify-between">
        <div className="flex flex-col basis-1/4 mt-5">
          <h5 className="font-bold">Services</h5>
          <Link className="mt-2 text-gray-100 hover:text-amber-300" to='/services/assignments'>Assignments</Link>
          <Link className="mt-2 text-gray-100 hover:text-amber-300" to='/services/thesis-writing'>Thesis Writing</Link>
          <Link className="mt-2 text-gray-100 hover:text-amber-300" to='/services/final-year-projects'>Final Year Projects</Link>
        </div>
        <div className="flex flex-col basis-1/4 mt-5">
          <h5 className="font-bold">Customer Support</h5>
          <Link className="mt-2 text-gray-300 hover:text-gray-800" to='/faq'>FAQ</Link>
          <Link className="mt-2 text-gray-300 hover:text-gray-800" to='/contact'>Contact Us</Link>
          <a className="mt-2 text-gray-600 hover:text-gray-800" href='mailto:support@wolfiesolutions.com'>support@wolfiesolutions.com</a>
        </div>
        <div className="flex flex-col basis-1/4 mt-5">
          <h5 className="font-bold">More Information</h5>
          <Link className="mt-2 text-gray-300 hover:text-gray-800" to='/about'>About Us</Link>
          <Link className="mt-2 text-gray-300 hover:text-gray-800" to='/blog'>Blog</Link>
          <Link className="mt-2 text-gray-300 hover:text-gray-800" to='/privacy-policy'>Privacy Policy</Link>
          <Link className="mt-2 text-gray-300 hover:text-gray-800" to='/tos'>Terms of Service</Link>
        </div>
      </section>
      <section className="m-auto py-3 w-2/5">
        <p>Copyright &copy; {(new Date()).getFullYear()} WolfieSolutions Ltd. All rights reserved.</p>
      </section>
    </footer>
  )
}