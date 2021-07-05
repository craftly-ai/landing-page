import React from "react"

const CommandmentBox = props => {
  const { title, description } = props

  return (
    <div className="row">
      <div className="col-md-5 col-12 title">
        <h3 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      <div className="col-md-7 col-12 text">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  )
}

export default CommandmentBox
