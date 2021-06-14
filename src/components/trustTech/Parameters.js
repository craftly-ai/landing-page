import React from "react"

const Parameters = props => {
  const { title, info } = props

  return (
    <div className="col-lg-3 col-md-6 col-12 parameters-li">
      <div className="dnt-btm-same-content">
        <h4>{title}</h4>
        <p>{info}</p>
      </div>
    </div>
  )
}

export default Parameters
