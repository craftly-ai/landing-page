import React from "react"

const GrowListItem = props => {
  const { img, heading, subheading } = props

  return (
    <div className="value-list">
      <div className="icon-box">
        <img className="img-fluid" src={img} alt="GrowListItem" />
      </div>
      <h4>{heading}</h4>
      <p>{subheading}</p>
    </div>
  )
}

export default GrowListItem
