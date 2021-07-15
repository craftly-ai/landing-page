import React from "react"
import { Link } from "gatsby"

const GuideCard = props => {
  const { url, sourceUrl, category, title, description } = props

  return (
    <div className="guies-box">
      <div className="img-wrap">
        <Link to={url}>
          <img
            src={sourceUrl}
            alt="Product Description"
            className="img-fluid"
          />
        </Link>
      </div>
      <div className="text-wrap">
        <span>{category}</span>
        <Link to={url} className="guide-title">
          {title}
        </Link>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}

export default GuideCard
