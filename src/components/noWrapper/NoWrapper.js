import React from "react"

const NoWrapper = props => {
  const { title, description } = props
  return (
    <div className="no-wrapper section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12 text-center">
            <h2>
              <span>{title}</span>
            </h2>
            <h3 dangerouslySetInnerHTML={{ __html: description }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoWrapper
