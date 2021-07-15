import React from "react"
import { Link } from "gatsby"

const RightSidebarCard = props => {
  const { title, description, buttonLabel, buttonUrl } = props
  return (
    <div className="content-right-cta section">
      <h5 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Link to={buttonUrl} className="btn-main">
        <span>{buttonLabel}</span>
      </Link>
    </div>
  )
}

export default RightSidebarCard
