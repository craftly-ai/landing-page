import React from "react"

const RightSidebarCard = props => {
  const { title, description, buttonLabel, buttonUrl } = props
  return (
    <div className="content-right-cta section">
      <h5 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <a href={buttonUrl} className="btn-main">
        <span>{buttonLabel}</span>
      </a>
    </div>
  )
}

export default RightSidebarCard
