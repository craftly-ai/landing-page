import React from "react"

const GuideCard = props => {
  const { url, sourceUrl, category, title, description } = props

  return (
    <div className="guies-box">
      <div className="img-wrap">
        <a href={url}>
          <img
            src={sourceUrl}
            alt="Product Description"
            className="img-fluid"
          />
        </a>
      </div>
      <div className="text-wrap">
        <span>{category}</span>
        <a href={url} className="guide-title">
          {title}
        </a>
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}

export default GuideCard
