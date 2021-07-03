import React from "react"

const CardEarn = props => {
  const { sourceUrl, title, description } = props

  return (
    <div className="value-list">
      <div className="icon-box">
        <img className="img-fluid" src={sourceUrl} alt="" />
      </div>
      <h4>{title}</h4>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  )
}

export default CardEarn
