import { useEffect } from "react"

export const Head = ({ title }) => {
  useEffect(() => {
    document.title = title ? title : "WolfieSolutions"
  })

  return (
    <></>
  )
}