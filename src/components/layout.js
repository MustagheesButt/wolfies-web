// import MessengerCustomerChat from "react-messenger-customer-chat"
import { Footer } from "./footer"
import { Navbar } from "./navbar"
import { SVGDefs } from "./svg_defs"

export const Layout = ({ fixedNav, children }) => {

  return (
    <>
      <SVGDefs />
      {/* <MessengerCustomerChat
        appId="189689855001912"
        pageId="189689855001912"
        loggedInGreeting="Hi! Want some help with assignments, resumes or projects? Feel free to contact!"
        loggedOutGreeting="Hi! Want some help with assignments, resumes or projects? Feel free to contact!" /> */}
      <Navbar fixed={fixedNav} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}