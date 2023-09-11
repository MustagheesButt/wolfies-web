import { FC, useEffect } from "react"

export const Head: FC<{title?: string}> = ({ title }) => {
  useEffect(() => {
    document.title = title ? title : "WolfieSolutions"
  })

  return (
    <></>
  )
}