import React from "react"
import { Link } from "gatsby"

const IdeaWrap = props => {
  const { text, url, label } = props

  return (
    <div className="idea-wrap">
      <p className="idea" dangerouslySetInnerHTML={{ __html: text }} />
      <Link
        className="more-btn blue"
        to={url}
        data-mode="popup"
        data-size={100}
        data-submit-close-delay={1}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </Link>
    </div>
  )
}

export default IdeaWrap
