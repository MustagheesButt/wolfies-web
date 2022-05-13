import { Menu } from "@headlessui/react"
import { Link } from "react-router-dom"

export const Navbar = ({ fixed }) => {
  let classes = ""
  if (fixed) {
    classes = "fixed z-10 left-0 right-0 top-0"
  }

  return (
    <nav className={`${classes}`}>
      <div className="basis-full p-3 text-center bg-red-500 text-white">
        Summer sale - 20% off on all services!
      </div>

      <div className="flex flex-wrap justify-around bg-white backdrop-blur-md p-2 text-gray-600 font-bold border-b-2">
        <Link to='/' className="mr-10 hover:text-gray-900 basis-1/3">
          <img src={`${process.env.PUBLIC_URL}/logo.png`} className="inline w-[30px] md:w-[50px]" alt="Logo" />
        </Link>

        <Menu>
          <Menu.Button aria-label="Main menu">
            <svg aria-hidden="true" focusable="false" className="h-6 w-6">
              <use href="#menu"></use>
            </svg>
          </Menu.Button>

          <Menu.Items className={`basis-full flex flex-col text-center`}>
            <Menu.Item>
              <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>
            </Menu.Item>

            <Menu.Item>
              <Menu as={'div'}>
                <Menu.Button className={"mr-5 text-gray-600 font-bold"}>
                  Services
                </Menu.Button>
                <Menu.Items className={"flex flex-col justify-center"}>
                  <Menu.Item>
                    <Link to='/services/assignments' className="mr-5 hover:text-gray-900">Assignments</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/services/assignments' className="mr-5 hover:text-gray-900">Assessments</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/services/assignments' className="mr-5 hover:text-gray-900">Essay Writing</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/services/assignments' className="mr-5 hover:text-gray-900">Dissertations</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/services/computer-science-programming' className="mr-5 hover:text-gray-900">Programming & Computer Science</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/plagiarism-checker' className="mr-5 hover:text-gray-900">Plagiarism Checker Tool</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/services/assignments' className="mr-5 hover:text-gray-900">Thesis Writing</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/services/assignments' className="mr-5 hover:text-gray-900">Final Year Projects</Link>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </Menu.Item>
            <Menu.Item>
              <Link to='/blog' className="mr-5 hover:text-gray-900">Blog</Link>
            </Menu.Item>
            <Menu.Item>
              <Link to='/contact' className="mr-5 hover:text-gray-900">Contact</Link>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  )
}