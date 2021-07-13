import React from "react"

const TipsBox = props => {
  const { title, description } = props
  return (
    <div className="tips-wrap">
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}

export default TipsBox
