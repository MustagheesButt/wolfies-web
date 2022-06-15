import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Layout } from "../components/layout"
import { fetchSample } from "../components/samples"

export const Sample = () => {
  const params = useParams()
  const [sample, setSample] = useState()

  useEffect(() => {
    fetchSample(params.slug, setSample)
  }, [params.slug])

  return (
    <Layout>
      {
        !sample ? "Loading..."
          :
          <>
            <section className="p-10">
              <h1 className="text-4xl font-bold" dangerouslySetInnerHTML={{ __html: sample.title }} />

            </section>

            <section className="p-10" dangerouslySetInnerHTML={{ __html: sample.content }} />
          </>
      }
    </Layout>
  )
}