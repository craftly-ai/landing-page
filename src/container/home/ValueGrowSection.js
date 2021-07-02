import React from "react"

const ValueGrowSection = props => {
  const { heading, subheading, button, buttonURL, img } = props

  return (
    <div class="value-grow-section section ptb100">
      <div class="container">
        <div class="row ">
          <div class="col-sm-5 col-12 left-conn justify-content-center align-self-center">
            <h2>{heading}</h2>
            <p> {subheading} </p>
            <a href={buttonURL} class="btn-main">
              {button}
            </a>
          </div>
          <div class="col-sm-7 col-12 right-conn justify-content-center align-self-center">
            <div class="img-box section">
              <img class="img-fluid" src={img} alt="dashboard" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValueGrowSection
