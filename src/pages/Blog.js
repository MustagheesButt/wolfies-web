import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Layout } from "../components/layout"
import { Posts, fetchPosts, fetchPost } from "../components/posts"

export const Blog = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts(setPosts)
  }, [])

  return (
    <Layout>
      <section className="flex flex-col justify-center h-[80vh] text-white bg-cover bg-fixed" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${process.env.PUBLIC_URL}/static/images/pexels-steve-397863.jpg)` }}>
        <h1 className="text-4xl font-bold text-center">Blog</h1>
        <h2 className="text-5xl text-center">Coming Soon</h2>

        <Posts posts={posts} />
      </section>
    </Layout>
  )
}

export const BlogPost = () => {
  const params = useParams()
  const [post, setPost] = useState()


  useEffect(() => {
    fetchPost(params.slug, setPost)
  }, [params.slug])

  return (
    <Layout>
      {
        !post ? "Loading..."
          :
          <>
            <section>
              <h1>{post.title}</h1>

            </section>

            <section dangerouslySetInnerHTML={{ __html: post.content }} />
          </>
      }
    </Layout>
  )
}