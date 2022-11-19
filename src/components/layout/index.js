// import MessengerCustomerChat from "react-messenger-customer-chat"
import { Footer } from "./footer"
import { Head } from "./head"
import { Navbar } from "./navbar"
import { SVGDefs } from "./svg_defs"

export const Layout = ({ fixedNav, children }) => {

  return (
    <>
      <Head /> {/* To reset title etc in case it's missing, otherwise it's page specific */}
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