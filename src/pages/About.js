import { Layout } from "../components/layout"

export const About = () => {
  const teamMembers = [
    {
      id: 1, name: "Ali R.", title: "CEO",
      profilePhoto: "https://media-exp1.licdn.com/dms/image/C4D03AQEqKQE8oLxBng/profile-displayphoto-shrink_200_200/0/1651936589581?e=2147483647&v=beta&t=tgqD0tUlclGoCa1MeoLYAFhBeKULXCIviIuR2E-tbYM",
      social: { twitter: "#", linkedin: "https://pk.linkedin.com/in/mr-wolfie", instagram: "https://instagram.com/wolfie.og" }
    },
    {
      id: 2, name: "Mustaghees Butt", title: "CTO", profilePhoto: "https://media-exp1.licdn.com/dms/image/C4D03AQFJk8olre8QhA/profile-displayphoto-shrink_200_200/0/1651398142384",
      social: { twitter: "https://twitter.com/mustagheesbutt", linkedin: "https://pk.linkedin.com/in/mustaghees-butt", instagram: "https://www.instagram.com/mustaghees99/" }
    },
    {
      id: 3, name: "Leo Wolfie", title: "COO", profilePhoto: "",
      social: { twitter: "#", linkedin: "#", instagram: "#" }
    },
  ]

  return (
    <Layout>
      <section className={`h-[50vh] flex justify-center items-center bg-cover bg-fixed bg-bottom text-white`} style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${process.env.PUBLIC_URL}/static/images/pexels-steve-397863.jpg)` }}>
        <h1 className="text-5xl font-bold">About Us</h1>
      </section>

      <section className="mx-10">
        <h2 className="text-3xl font-bold mt-10">It All Started in 2017</h2>
        <p className="font-serif mt-5">WolfieSolutions was born to ease the pain and suffering of students worldwide. The academia is bombarding young souls with
          meaningless assignments and time consuming lengthy projects, which have absolute zero practical value. Fear no more, we are here to end this tyranny!</p>
        <p className="font-serif my-5">Whether you are a student who is working on a student visa, or just a regular student who is in need of some help, we are here to help. Just take our hand
          and forget all of your problems. Focus on what's more important to you!
        </p>
      </section>

      <section className="p-10 bg-gray-100 mb-10 text-center">
        <h1 className="text-4xl font-bold">Our Mission</h1>
        <p className="font-serif mt-5"><em>"I've not failed! I've just found 10,000 ways that won't work."</em> - Nikola Tesla, probably.</p>
        <p className="mt-3">At WolfieSolutions, we are revolutionizing the way people go and find work abroad, live in harsh conditions
          just so they can send money back home. We try our hardest to make it easier for them to focus on their work and
          live a better quality of life.</p>
        <p className="mt-3">We are also committed to a creating this world a better place. Each year our team celebrates Earth day by planting 100 trees & plants.
          We belive in a future that's worth living for!</p>
      </section>

      <section className="mx-10">
        <h1 className="text-4xl font-bold text-center mb-10">Our Team</h1>
        <div className="flex flex-col md:flex-row items-center justify-center mb-10">
          {
            teamMembers.map(m => (
              <Card title={m.title} name={m.name} profilePhoto={m.profilePhoto} social={m.social} key={m.id} />
            ))
          }
        </div>
      </section>
    </Layout>
  )
}

const Card = ({ title, name, profilePhoto, social }) => {
  return (
    <div className="rounded-lg border shadow-md flex flex-col p-5 mr-5 mb-5 bg-white">

      {/* <!-- Top Section --> */}
      <div className="flex flex-col items-center">
        <p className="mt-10 mb-3 text-2xl font-light text-gray-700">{title}</p>
        <img className="rounded-full mb-3" width="200" height="200" src={profilePhoto ? profilePhoto : `${process.env.PUBLIC_URL}/static/images/profile.webp`} alt="" />
        <p className="mt-1 text-3xl font-light text-gray-700 text-center">{name}</p>
        <div className="h-0.5 bg-gray-200 w-full my-5"></div>
      </div>

      {/* <!-- Bottom Section --> */}
      <div className="flex px-3 justify-center">
        <a href={social.twitter} target="_blank" rel="noreferrer">
          <svg className="h-6 w-6 mr-2" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <title>Twitter</title>
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
          </svg>
        </a>
        <a href={social.linkedin} target="_blank" rel="noreferrer">
          <svg className="h-6 w-6 mr-2">
            <use href="#linkedin" />
          </svg>
        </a>
        <a href={social.instagram} target="_blank" rel="noreferrer">
          <svg className="h-6 w-6 mr-2">
            <use href="#instagram" />
          </svg>
        </a>
      </div>
    </div>
  )
}