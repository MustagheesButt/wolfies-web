import { Link } from "react-router-dom"
import { Http } from "../services/http"

export const Posts = ({ posts, vertical }) => {
  let containerClasses = "overflow-x-scroll"
  let postClasses = "max-w-md items-center"
  if (vertical) {
    containerClasses = "flex-col"
    postClasses = ""
  }
  return (
    <div className={`flex ${containerClasses} p-10 gap-5`}>
      {
        posts.map(p => (
          <Link to={`/blog/${p.slug}`} key={p.id}>
            <div className={`shrink-0 relative flex flex-col ${postClasses} rounded-lg bg-white shadow-lg`}>
              { p.photoUrl && <img className="object-cover w-24 h-24 rounded-full" src={p.photoUrl} alt="" /> }
              <div className="p-6 flex flex-col justify-start">
                <h2 className="text-gray-900 text-xl font-medium mb-2">{p.title}</h2>
                <p className="text-gray-700 text-base mb-4" dangerouslySetInnerHTML={{ __html: p.excerpt }}></p>
                <p className="text-gray-600 text-xs">{p.customerName}</p>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export async function fetchPosts(cb, categories = []) {
  const params = new URLSearchParams({
    _embed: "wp:featuredmedia"
  })
  if (typeof categories === "number" || categories.length > 0)
    params.append("categories", categories)

  const data = await Http.get(`/wp/v2/posts?${params.toString()}`)

  cb(mapPosts(data))
}

export async function fetchPost(slug, cb) {
  if (!slug) throw new Error('Invalid slug')

  const response = await fetch(`${import.meta.env.VITE_API_URL}/wp/v2/posts/?slug=${slug}&_embed=author,wp:featuredmedia`)
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  cb(mapPosts(data)[0])
  return mapPosts(data)[0]
}

function mapPosts(data) {
  return data.map(p => ({
    id: p.id,
    slug: p.slug,
    title: p.title.rendered,
    content: p.content.rendered,
    excerpt: p.excerpt.rendered,
    photoUrl: p._embedded && p._embedded['wp:featuredmedia'] && p._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url,
    authorName: p.author_name,
    publishedAt: p.published_at
  }))
}