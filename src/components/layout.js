import { Footer } from "./footer"
import { MessengerChat } from "./messenger_chat"
import { Navbar } from "./navbar"
import { SVGDefs } from "./svg_defs"

export const Layout = ({ fixedNav, children }) => {

  return (
    <>
      <SVGDefs />
      <MessengerChat />
      <Navbar fixed={fixedNav} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}