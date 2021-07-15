import React from "react"

const WorkCard = props => {
  const { className, title, description, label, link } = props

  return (
    <div className={className}>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <a href={link} className="link">
        {label}
      </a>
    </div>
  )
}

export default WorkCard
