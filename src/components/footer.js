import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-cyan-500 to-blue-500">
      <section className="flex flex-col md:flex-row m-auto py-5 w-3/5 border-b-2 justify-between">
        <div className="flex flex-col basis-1/4 mt-5">
          <h2 className="font-bold">Services</h2>
          <Link className="mt-2 text-gray-100 hover:text-white" to='/services/assignments'>Assignments</Link>
          <Link className="mt-2 text-gray-100 hover:text-white" to='/services/thesis-writing'>Thesis Writing</Link>
          <Link className="mt-2 text-gray-100 hover:text-white" to='/services/final-year-projects'>Final Year Projects</Link>
        </div>
        <div className="flex flex-col basis-1/4 mt-5">
          <h2 className="font-bold">Customer Support</h2>
          <Link className="mt-2 text-gray-100 hover:text-white" to='/faq'>FAQ</Link>
          <Link className="mt-2 text-gray-100 hover:text-white" to='/contact'>Contact Us</Link>
          <a className="mt-2 text-gray-100 hover:text-white" href='mailto:support@wolfiesolutions.com'>support@wolfiesolutions.com</a>
        </div>
        <div className="flex flex-col basis-1/4 mt-5">
          <h2 className="font-bold">More Information</h2>
          <Link className="mt-2 text-gray-100 hover:text-white" to='/about'>About Us</Link>
          <Link className="mt-2 text-gray-100 hover:text-white" to='/blog'>Blog</Link>
          <Link className="mt-2 text-gray-100 hover:text-white" to='/privacy-policy'>Privacy Policy</Link>
          <Link className="mt-2 text-gray-100 hover:text-white" to='/tos'>Terms of Service</Link>
        </div>
      </section>
      <section className="m-auto py-3 w-2/5">
        <p>Copyright &copy; {(new Date()).getFullYear()} WolfieSolutions Ltd. All rights reserved.</p>
      </section>
    </footer>
  )
}