import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { forwardRef, useRef } from "react"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

const services: { title: string; href: string; description: string }[] = [
  {
    title: "Exams",
    href: "/services/exams",
    description:
      "We prepare you for your offline exams. Or if needed appear for you in your online exams.",
  },
  {
    title: "Quiz",
    href: "/services/quiz",
    description:
      "Get help with online & offline quizes.",
  },
  {
    title: "Thesis",
    href: "/services/thesis-writing",
    description:
      "Top rated thesis writing service.",
  },
  {
    title: "Research",
    href: "/services/research",
    description: "We conduct in-depth research work for you.",
  },
  {
    title: "CS/IT Projects",
    href: "/services/computer-science-programming",
    description:
      "All sorts of programming projects. C++/Java/Python and more.",
  },
  {
    title: "Resume/CV/Cover Letters",
    href: "/services/job-application-help",
    description:
      "Need help with your job application? From LinkedIn profiles to cover letters, we help with everything.",
  },
  {
    title: "Diplomas & Certificates",
    href: "/services/diplomas-certificates",
    description:
      "Get the diplomas & certifications you need, right now.",
  },
  {
    title: "Final Year Projects",
    href: "/services/final-year-projects",
    description: "Get professional help with your college/university FYPs"
  }
]

export const Navbar = ({ fixed }) => {
  let classes = ""
  if (fixed) {
    classes = "fixed z-10 left-0 right-0 top-0"
  }

  // const month = new Date().getMonth()
  // const season = (month >= 1 && month <= 8) ? "Summer" : (month >= 9 && month <= 10 ? "Winter" : "New Year")

  const mobileForceCloseBtn = useRef<HTMLButtonElement>()

  return (
    //{showLoginModal ? <LoginModal closeCb={() => setShowLoginModal(false)} /> : ''}
    <>
      {/* <div className="basis-full p-3 text-center bg-red-500 text-white">
        {season} sale - 20% off on all services!
      </div> */}

      <NavigationMenu className={`py-2 max-w-full bg-background ${classes}`}>
        <Link to='/' className="mr-20">
          <img src={`/logo.png`} className=" w-[30px] md:w-[50px]" alt="Logo" />
        </Link>

        <NavigationMenuList className="hidden md:flex">
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
              <Link to='/'>Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Assignments</NavigationMenuTrigger>
            <NavigationMenuContent className="">
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/services/assignments"
                    >
                      {/* <Icons.logo className="h-6 w-6" /> */}
                      <img src={`/logo.png`} className="" alt="Logo" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        WolfieSolutions
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        The most trusted academic help service in Australia.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/services/assignments" title="Law">
                  Criminal, Constitutional, Corporate & International law + more.
                </ListItem>
                <ListItem href="/services/assignments" title="Nursing">
                  Microbiology, Anatomy and Physiology, Biochemistry and more.
                </ListItem>
                <ListItem href="/services/assignments" title="Business">
                  Need help with MBA, Finance, Marketing, Operations or Economics assignments?
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {services.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} asChild>
              <Link to='/contact'>Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>

        {/* For Mobile */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline">
              <Icons.Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>WolfieSolutions</SheetTitle>
              <SheetDescription>
                Your personal academic assistance service.
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-col py-4">
              <Link to='/' className={navigationMenuTriggerStyle()}>Home</Link>

              <Link to='/services/assignments' className={navigationMenuTriggerStyle()} onClick={() => mobileForceCloseBtn.current.click()}>Assignments</Link>

              {
                services.map(s =>
                  <Link key={s.href} to={s.href} className={navigationMenuTriggerStyle()} onClick={() => mobileForceCloseBtn.current.click()}>{s.title}</Link>
                )
              }

              <Link to='/contact' className={navigationMenuTriggerStyle()}>Contact</Link>

              <Link to='/about' className={navigationMenuTriggerStyle()}>About</Link>
            </div>

            <SheetFooter>
              <SheetClose asChild>
                <button className="hidden" ref={mobileForceCloseBtn}>Close</button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </NavigationMenu>
    </>
  )
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
          to={props.href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

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