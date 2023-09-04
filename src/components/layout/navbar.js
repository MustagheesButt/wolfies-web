import { Menu } from "@headlessui/react"
import { Link } from "react-router-dom"

export const Navbar = ({ fixed }) => {
  let classes = ""
  if (fixed) {
    classes = "fixed z-10 left-0 right-0 top-0"
  }

  const month = new Date().getMonth()
  const season = (month >= 1 && month <= 8) ? "Summer" : (month >= 9 && month <= 10 ? "Winter" : "New Year")

  return (
    // {showLoginModal ? <LoginModal closeCb={() => setShowLoginModal(false)} /> : ''}
    <nav className={`${classes}`}>
      <div className="basis-full p-3 text-center bg-red-500 text-white">
        {season} sale - 20% off on all services!
      </div>

      <div className="flex flex-wrap justify-around bg-white backdrop-blur-md p-2 text-gray-600 font-bold border-b-2">
        <Link to='/' className="mr-10 hover:text-gray-900 basis-1/3">
          <img src={`/logo.png`} className="inline w-[30px] md:w-[50px]" alt="Logo" />
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
                    <Link to='/services/essay-writing' className="mr-5 hover:text-gray-900">Essay Writing</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/services/dissertations' className="mr-5 hover:text-gray-900">Dissertations</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/services/computer-science-programming' className="mr-5 hover:text-gray-900">Programming & Computer Science</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/plagiarism-checker' className="mr-5 hover:text-gray-900">Plagiarism Checker Tool</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/services/thesis-writing' className="mr-5 hover:text-gray-900">Thesis Writing</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/services/final-year-projects' className="mr-5 hover:text-gray-900">Final Year Projects</Link>
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </Menu.Item>
            {/* <Menu.Item>
              <Link to='/blog' className="mr-5 hover:text-gray-900">Blog</Link>
            </Menu.Item> */}
            <Menu.Item>
              <Link to='/contact' className="mr-5 hover:text-gray-900">Contact</Link>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </nav>
  )
}

// const LoginModal = ({ closeCb }) => {
//   const email = useRef(null)
//   const password = useRef(null)

//   const loginMutation = useMutation(() => {
//     return fetch(`https://wolfiesolutions.com/?rest_route=/cw/v1/auth&email=${email.current.value}&password=${password.current.value}`, { method: "POST" })
//   })

//   return (
//     <div onClick={(e) => !isOrIsChildOf(e.target, "#loginModal") && closeCb()} className="grid place-content-center fixed top-0 right-0 left-0 bottom-0 bg-black/50 backdrop-blur">
//       <div id="loginModal" className="bg-white dark:bg-slate-900/50 p-20">
//         <h3 className="mb-3">Login</h3>
//         <div className="mb-3">
//           <input ref={email} placeholder="you@example.com" type='email' className="p-2 dark:bg-slate-800" />
//         </div>
//         <div className="mb-3">
//           <input ref={password} placeholder="Password" type='password' className="p-2 dark:bg-slate-800" />
//         </div>
//         <button type="submit" onClick={loginMutation.mutate}>Login</button>
//       </div>
//     </div>
//   )
// }

// const isOrIsChildOf = (ele, target) => {
//   target = typeof target === "string" ? document.querySelector(target) : target
//   const children = [...target.children]

//   if (target === ele || children.indexOf(ele) !== -1)
//     return true
//   return children.some((x) => isOrIsChildOf(ele, x))
// }