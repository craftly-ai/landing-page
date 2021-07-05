import React from "react"

const GuideBox = props => {
  const { url, sourceUrl, category, title, description } = props

  return (
    <div className="guies-box top">
      <div className="img-wrap">
        <a href={url}>
          <img
            src={sourceUrl}
            alt="Tool Input/Output Examples"
            className="img-fluid"
          />
        </a>
        <div className="text-wrap">
          <span>{category}</span>
          <a href={url} className="guide-title">
            {title}
          </a>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  )
}

export default GuideBox
