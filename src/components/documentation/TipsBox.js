import React from "react"

const TipsBox = props => {
  const { className, title, description } = props
  const addClassName = `tips-wrap ${className}`
  return (
    <div className={addClassName}>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}

export default TipsBox
