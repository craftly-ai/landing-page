import React from "react"

const ProcessCard = props => {
  const { icon, title, description, buttonLabel, buttonUrl } = props

  return (
    <div className="box-wrap">
      <i>
        <img src={icon} className="img-fluid" alt="Step by Step Guide" />
      </i>
      <h5>{title}</h5>
      <p>{description}</p>
      <a href={buttonUrl} className="btn-main">
        {buttonLabel}
      </a>
    </div>
  )
}

export default ProcessCard
