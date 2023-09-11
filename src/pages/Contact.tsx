import { Player } from "@lottiefiles/react-lottie-player"
import { Head } from "../components/layout/head"
import { Layout } from "../components/layout"
import { Icons } from "@/components/icons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/ContactForm"

export const Contact = () => {
  return (
    <Layout>
      <Head title="Contact Us" />
      <section className="flex flex-col md:flex-row-reverse justify-around py-14 bg-blue-100">
        <Player src="https://assets10.lottiefiles.com/packages/lf20_isbiybfh.json" style={{ maxWidth: "400px" }} autoplay loop />
        <div className="flex flex-col justify-center text-center md:text-left md:w-1/3  mx-5">
          <h1 className="text-4xl font-bold mb-5">Contact Us Now</h1>
          <p className="text-2xl font-bold text-gray-600">Send us Any Questions or Queries You Have. We Are Here to Help You 24/7.</p>
        </div>
      </section>

      <section className="flex flex-col md:flex-row justify-around gap-5 my-10">
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-5">Contact/WhatsApp</h2>
          <ul>
            {/* <li>92 310 4515 123</li>
            <li>92 303 4401 077</li> */}
            <li>
              <Icons.Whatsapp className="inline" />
              <a href="tel:+61 3 9999 7423">+61 3 9999 7423</a>
            </li>
          </ul>
          <p className="italic">anywhere, anytime {'<'}3</p>

          <div className="my-10">
            <h2 className="text-md font-bold text-gray-500 mb-2">EMAIL</h2>
            <h3 className="text-2xl font-bold mb-10">wolfiesolutions@gmail.com</h3>

            <h2 className="text-md font-bold text-gray-500 mb-3">SOCIAL</h2>
            <div className="flex justify-center md:justify-start">
              <a href="https://facebook.com/wolfie.solutions/" target='_blank' rel="noreferrer" className="text-blue-500 mr-5">
                <svg className="w-8 h-8">
                  <use href="#facebook" />
                </svg>
              </a>

              <a href="https://instagram.com/wolfie.solutions/" target='_blank' rel="noreferrer" className="text-pink-500">
                <svg className="w-8 h-8">
                  <use href="#instagram" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Write To Us</CardTitle>
              <CardDescription>Tell us what's on your mind. Give us your feedback and suggestions.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  )
}
