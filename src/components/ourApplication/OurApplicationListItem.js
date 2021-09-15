import React from "react"

const OurApplicationListItem = props => {
  const { icon, title, description } = props

  return (
    <li>
      <div className="app-box">
        <i>
          <img className="img-fluid" src={icon} alt={title} />
        </i>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </li>
  )
}

export default OurApplicationListItem
