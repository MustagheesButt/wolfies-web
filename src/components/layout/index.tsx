import { FC } from "react"
import { Footer } from "./footer"
import { Head } from "./head"
import { Navbar } from "./navbar"
import { SVGDefs } from "./svg_defs"
// import { MessengerChat } from "react-messenger-chat-plugin"

type LayoutProps = {
  fixedNav?: boolean
  children: JSX.Element[]
}

export const Layout: FC<LayoutProps> = ({ fixedNav, children }) => {

  return (
    <>
      <Head /> {/* To reset title etc in case it's missing, otherwise it's page specific */}
      <SVGDefs />
      {/* <MessengerChat
        pageId="189689855001912"
        themeColor={"#000000"}
        bottomSpacing={300}
        loggedInGreeting="Hi! Want some help with assignments, resumes or projects? Feel free to contact!"
        loggedOutGreeting="Hi! Want some help with assignments, resumes or projects? Feel free to contact!"
      // greetingDialogDisplay={"show"}
      // debugMode={true}
      /> */}
      <Navbar fixed={fixedNav} />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}