import React from "react"
import { Link } from "gatsby"

const GuideBox = props => {
  const { url, sourceUrl, category, title, description } = props

  return (
    <div className="guies-box top">
      <div className="img-wrap">
        <Link to={url}>
          <img
            src={sourceUrl}
            alt="Tool Input/Output Examples"
            className="img-fluid"
          />
        </Link>
        <div className="text-wrap">
          <span>{category}</span>
          <Link to={url} className="guide-title">
            {title}
          </Link>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  )
}

export default GuideBox
