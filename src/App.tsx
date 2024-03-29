import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { Home } from "./pages/Home"
import { Services, Assignments, ComputerScience, ServicesHome, EssayWriting, Dissertations, ThesisWriting, FinalYearProjects } from "./pages/Services"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Blog, BlogPost } from "./pages/Blog"
import { Sample } from "./pages/Sample"
import { Order } from "./pages/Order/Order"
import { Congratulations } from "./pages/Congratulations"
import { FAQ } from "./pages/FAQ"
import { NotFound } from "./pages/NotFound"
import AOS from "aos"
import './App.css'
import 'aos/dist/aos.css'
import { JobApplication } from "./pages/services/JobApplication"

// Could've used descendant routes, but I think this is more managable
// https://reactrouter.com/docs/en/v6/getting-started/overview#descendant-routes

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />}>
        <Route index element={<ServicesHome />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="essay-writing" element={<EssayWriting />} />
        <Route path="dissertations" element={<Dissertations />} />
        <Route path="computer-science-programming" element={<ComputerScience />} />
        <Route path="thesis-writing" element={<ThesisWriting />} />
        <Route path="final-year-projects" element={<FinalYearProjects />} />
        <Route path="job-application-help" element={<JobApplication />} />
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog">
        <Route index element={<Blog />} />
        <Route path=":slug" element={<BlogPost />} />
      </Route>
      <Route path="/samples/:slug" element={<Sample />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/order" element={<Order />} />
      <Route path="/congratulations" element={<Congratulations />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
