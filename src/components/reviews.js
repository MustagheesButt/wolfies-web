import { Http } from "../services/http"

// maybe also fetch and map here too
export const Reviews = ({ reviews }) => {
  return (
    <div className="flex overflow-x-scroll p-10">
      {
        reviews.map(r => (
          <div className="shrink-0 mr-10 relative flex flex-col md:flex-row max-w-xl rounded-lg bg-white shadow-lg" key={r.id}>
            <img className="object-cover w-24 h-24 absolute -left-6 top-7 rounded-full" src={r.photoUrl || `/static/images/profile.webp`} alt="" />
            <div className="p-6 pl-24 flex flex-col justify-start">
              <h2 className="text-gray-900 text-xl font-medium mb-2">{r.title}</h2>
              <p className="text-gray-700 text-base mb-4" dangerouslySetInnerHTML={{ __html: r.content }}></p>
              <p className="text-gray-600 text-xs">{r.customerName}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export async function fetchReviews(cb, categories=[]) {
  const params = new URLSearchParams({
    _embed: "wp:featuredmedia"
  })
  if (typeof categories === "number" || categories.length > 0)
    params.append("categories", categories)

  const data = await Http.get(`/wp/v2/reviews?${params.toString()}`)

  cb(mapReviews(data))
}

function mapReviews(data) {
  return data.map(r => ({
    id: r.id,
    title: r.title.rendered,
    content: r.content.rendered,
    photoUrl: r._embedded && r._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url,
    customerName: r.acf.customer_name
  }))
}