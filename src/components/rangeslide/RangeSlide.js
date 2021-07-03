import React from "react"

const RangeSlide = props => {
  const { title, description } = props

  return (
    <div className="affiliate-video section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-12">
            <div className="earning-potential">
              <h2 className="f50">{title}</h2>
              <p>{description}</p>
              <div className="range-slide">
                <div id="rangeslide" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RangeSlide
