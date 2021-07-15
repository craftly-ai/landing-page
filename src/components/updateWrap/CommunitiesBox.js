import React from "react"
import { Link } from "gatsby"

const CommunitiesBox = props => {
  const { icon, title, description, linkLabel, linkUrl } = props
  return (
    <div className="communities-box">
      <i>
        <img src={icon} alt="Facebook" className="img-fluid" />
      </i>
      <h4 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Link
        to={linkUrl}
        className="more-btn blue"
        target="_blank"
        rel="noreferrer"
      >
        {linkLabel}
      </Link>
    </div>
  )
}

export default CommunitiesBox
