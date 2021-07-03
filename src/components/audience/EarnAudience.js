import React from "react"

const EarnAudience = props => {
  const { title, description } = props
  return (
    <div className="row">
      <div className="col-md-4 col-12 left-box">
        <h3>{title}</h3>
      </div>
      <div className="col-md-8 col-12 right-box">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}

export default EarnAudience
