import { Link } from "react-router-dom"

export const Samples = ({ samples }) => {
  const colors = ['blue', 'indigo']

  return (
    <div className="flex overflow-x-scroll p-10">
      {
        samples.map((s, i) => (
          <Link to={`/samples/${s.slug}`} key={s.id}>
            <div className={`shrink-0 relative flex flex-col max-w-md rounded-lg bg-${colors[i % colors.length]}-300 shadow-lg items-center mr-10`}>
              {s.photoUrl && <img className="object-cover w-24 h-24 rounded-full" src={s.photoUrl} alt="" />}
              <div className="p-6 flex flex-col justify-start">
                <h2 className="text-gray-900 text-xl font-medium mb-2" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="text-gray-800 text-base mb-4" dangerouslySetInnerHTML={{ __html: s.excerpt }}></p>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export async function fetchSamples(cb, categories = []) {
  const params = new URLSearchParams({
    _embed: "wp:featuredmedia"
  })
  if (typeof categories === "number" || categories.length > 0)
    params.append("categories", categories)

  const resp = await fetch(`${process.env.REACT_APP_API_URL}/wp/v2/samples?${params.toString()}`)
  const data = await resp.json()

  cb(mapSamples(data))
}

export async function fetchSample(slug, cb) {
  if (!slug) throw new Error('Invalid slug')

  const response = await fetch(`${process.env.REACT_APP_API_URL}/wp/v2/samples/?slug=${slug}&_embed=author,wp:featuredmedia`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  const sample = mapSamples(data)[0]
  cb(sample)
  return sample
}

function mapSamples(data) {
  return data.map(s => ({
    id: s.id,
    slug: s.slug,
    title: s.title.rendered,
    excerpt: s.excerpt.rendered,
    content: s.content.rendered,
    photoUrl: s._embedded && s._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url
  }))
}
