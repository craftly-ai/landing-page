import React from "react"

const IdeaWrap = props => {
  const { text, url, label } = props

  return (
    <div className="idea-wrap">
      <p className="idea" dangerouslySetInnerHTML={{ __html: text }} />
      <a
        className="more-btn blue"
        href={url}
        data-mode="popup"
        data-size={100}
        data-submit-close-delay={1}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
    </div>
  )
}

export default IdeaWrap
