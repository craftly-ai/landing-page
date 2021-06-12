import React from "react"
import Typewriter from "./../components/Typewriter/Typewriter"
import img from "../images/banner-bg-image.png"

const IntroSection = props => {
  const {
    headingL1,
    headingL2,
    dataPeriod,
    dataRotate,
    art,
    subHeading,
  } = props

  return (
    <div className="hero section">
      <div className="container">
        <div className="row hero-con">
          <div className="col-sm-6 col-12 justify-content-center align-self-center left-conn">
            <h1>
              {headingL1} <br />
              {headingL2}
            </h1>
            <Typewriter
              dataPeriod={dataPeriod}
              dataRotate={dataRotate}
              art={art}
            />
            <p>{subHeading}</p>
            <div className="request-access-raw section">
              <div className="form-group">
                <label htmlFor>Request Access</label>
                <div className="prefinery-form-embed" />
              </div>
              <h6>
                <span /> 5 Days Free Trial
              </h6>
            </div>
          </div>
          <div className="col-sm-6 col-12 justify-content-center align-self-center right-conn">
            <div className="img-box" id="lottie">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IntroSection
