
export const Posts = ({ posts }) => {
  return (
    <div className="flex overflow-x-scroll p-10">
      {
        posts.map(p => (
          <div className="shrink-0 mr-10 relative flex flex-col md:flex-row max-w-xl rounded-lg bg-white shadow-lg" key={p.id}>
            <img className="object-cover w-24 h-24 absolute -left-6 top-7 rounded-full" src={p.photoUrl || `${process.env.PUBLIC_URL}/static/images/profile.webp`} alt="" />
            <div className="p-6 pl-24 flex flex-col justify-start">
              <h2 className="text-gray-900 text-xl font-medium mb-2">{p.title}</h2>
              <p className="text-gray-700 text-base mb-4" dangerouslySetInnerHTML={{ __html: p.content }}></p>
              <p className="text-gray-600 text-xs">{p.customerName}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export async function fetchPosts(cb, category='') {
  const resp = await fetch(`${process.env.REACT_APP_API_URL}/wp/v2/posts?_embed=wp:featuredmedia`)
  const data = await resp.json()

  cb(mapPosts(data))
}

function mapPosts(data) {
  return data.map(p => ({
    id: p.id,
    title: p.title.rendered,
    content: p.content.rendered,
    photoUrl: p._embedded && p._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail.source_url,
    authorName: p.author_name,
    publishedAt: p.published_at
  }))
}